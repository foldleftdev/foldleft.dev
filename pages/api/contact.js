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
      res.status(400).end();
    } else if (await verifyRecaptcha(recaptcha)) {
      await transporter.sendMail({
        from: process.env.CONTACT_FROM,
        to: process.env.CONTACT_TO,
        bcc: process.env.CONTACT_BCC ?? undefined,
        replyTo: {
          name: name ?? undefined,
          address: email,
        },
        subject: 'New Inquiry',
        text: message ?? '',
      });
      res.redirect('/thanks');
    } else {
      res.status(429).end();
    }
  } else {
    res.redirect('/');
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
  const { success, score, action } = await res.json();
  return success && score >= 0.5 && action === 'submit';
}
