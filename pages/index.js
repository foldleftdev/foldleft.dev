import TextInput from '../components/textInput';
import Layout from '../components/layout';
import Submit from '../components/submit';
import { useState } from 'react';
import Head from 'next/head';
import useRecaptcha from '../hooks/useRecaptcha';
import Heading from '../components/heading';
import styles from './index.module.css';

export default function Index() {
  const [submitting, setSubmitting] = useState(false);
  const recaptcha = useRecaptcha();

  function onSubmit(e) {
    setSubmitting(true);
    recaptcha.onSubmit(e);
  }

  return (
    <Layout>
      <Head>
        <script src={recaptcha.scriptSrc}/>
      </Head>
      <div className={styles.container}>
        <Heading text="Let's get in touch" suffix="📨"/>
        <form ref={recaptcha.form} method="post" action="/api/contact" onSubmit={onSubmit}>
          <input type="hidden" name="recaptcha" value={recaptcha.token}/>
          <TextInput label="Name" name="name" autoComplete="name"/>
          <TextInput label="Email" name="email" type="email" autoComplete="email" required/>
          <TextInput large label="Inquiry" name="message" autoComplete="off"/>
          <Submit loading={submitting}/>
        </form>
      </div>
    </Layout>
  );
}
