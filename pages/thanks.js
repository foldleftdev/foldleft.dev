import Layout from '../components/layout';
import styles from './thanks.module.css';
import Spacer from '../components/spacer';

export default function Thanks() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Thanks for reaching out! <Spacer value="🎉"/></h1>
        <p>We'll get back to you in a flash.</p>
      </div>
    </Layout>
  );
}
