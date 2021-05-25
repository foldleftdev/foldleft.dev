import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;1,400&display=swap"/>
        <title>TJ Mazeika</title>
      </Head>
      <h1 className={styles.title}>TJ Mazeika</h1>
      <p className={styles.subtitle}>Software Engineer</p>
      {/*<Image src="/glasses.svg" alt="Glasses" width={300} height={150}/>*/}
      {/*<Image src="/glasses.svg" alt="Glasses" width={350} height={160}/>*/}
    </div>
  );
}
