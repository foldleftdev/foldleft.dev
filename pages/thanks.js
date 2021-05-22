import Layout from '../components/layout';
import Heading from '../components/heading';
import styles from './thanks.module.css';

export default function Thanks() {
  return (
    <Layout>
      <div className={styles.container}>
        <Heading text="Thanks for reaching out!" suffix="🎉"/>
        <p>We'll get back to you in a flash.</p>
      </div>
    </Layout>
  );
}
