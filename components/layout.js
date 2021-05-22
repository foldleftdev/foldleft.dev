import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function Layout({
  children,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mazeika LLC</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Professional consulting and web development services."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <a href="/">
          <Image src="/headshot.svg" alt="Headshot" width={128} height={128}/>
        </a>
        <div>
          <h1 className={styles.headerTitle}>
            Mazeika LLC
          </h1>
          <p className={styles.headerSubtitle}>
            Professional consulting and web development services.
          </p>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
