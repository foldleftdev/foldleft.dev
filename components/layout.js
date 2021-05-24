import Head from 'next/head';
import Image from 'next/image';
import Section from './section';
import styles from './layout.module.css';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function Layout({
  children,
}) {
  return (
    <div>
      <Head>
        <title>Mazeika LLC</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Professional consulting and web development services."/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
        />
      </Head>
      <Section as="header" className={styles.header}>
        <a href="/">
          <Image src="/headshot.svg" alt="Headshot" width={80} height={80}/>
        </a>
        <div>
          <h1 className={styles.headerTitle}>
            Mazeika LLC
          </h1>
          <p className={styles.headerSubtitle}>
            Professional consulting and web development services.
          </p>
        </div>
      </Section>
      <main>
        {children}
      </main>
    </div>
  );
}
