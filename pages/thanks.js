import Layout from '../components/layout';
import Heading from '../components/heading';
import styles from './thanks.module.css';
import { useEffect } from 'react';
import Section from '../components/section';

export default function Thanks() {
  useEffect(() => {
    // Clear the inquiry form storage.
    window.localStorage.clear();
  });

  return (
    <Layout>
      <Section className={styles.container}>
        <Heading text="Thanks for reaching out!" suffix="🎉"/>
        <p>We'll get back to you in a flash.</p>
      </Section>
    </Layout>
  );
}
