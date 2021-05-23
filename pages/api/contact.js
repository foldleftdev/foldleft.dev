import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recaptcha, name, email, message } = req.body;
    if (!recaptcha || !email) {
      res.status(400).send('Required reCAPTCHA and email.');
    } else if (await verifyRecaptcha(recaptcha)) {
      try {
        await transporter.sendMail({
          from: process.env.CONTACT_FROM,
          to: process.env.CONTACT_TO,
          bcc: process.env.CONTACT_BCC || undefined,
          replyTo: {
            name: sanitize(name) || undefined,
            address: sanitize(email),
          },
          subject: 'New Inquiry',
          text: message || '',
        });
        res.redirect(303, '/thanks');
      } catch (e) {
        console.error('Failed to send email:', e);
        res.status(500).end();
      }
    } else {
      res.status(429).send('Failed to verify reCAPTCHA.');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end();
  }
}

async function verifyRecaptcha(token) {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  });
  if (!res.ok) {
    console.error('Failed to verify reCAPTCHA:', res.status, res.statusText);
    return false;
  }
  const { success, score, action } = await res.json();
  return success && score >= 0.5 && action === 'submit';
}

/**
 * @param {string} [value]
 * @returns {string | undefined}
 */
function sanitize(value) {
  return value?.replace(/[\r\n]/g, '');
}
