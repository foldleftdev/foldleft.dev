import { useEffect, useRef, useState } from 'react';

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function useRecaptcha() {
  const form = useRef();
  const [token, setToken] = useState('');

  useEffect(() => {
    if (token) {
      form.current.submit();
    }
  }, [token]);

  return {
    form,
    token,
    onSubmit(e) {
      e.preventDefault();
      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action: 'submit' }).then(setToken);
      });
    },
    scriptSrc: `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
  };
}
