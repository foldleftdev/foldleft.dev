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
        <meta charSet="utf-8"/>
        <meta name="description" content="Professional consulting and web development services."/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
        />
        <title>Mazeika LLC</title>
      </Head>
      <Section as="header" className={styles.header}>
        <a href="/">
          <Image
            src="/headshot.svg"
            alt="Headshot"
            width={80}
            height={80}
            priority
          />
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
      <Section as="footer" className={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} Mazeika LLC
        </div>
        <div>
          <a
            className={styles.footerLink}
            href="https://www.linkedin.com/company/mazeika-llc"
          >
            <img
              className={styles.footerImage}
              src="/linkedin.png"
              alt="LinkedIn"
              width={76 / 4}
              height={65 / 4}
            />
          </a>
        </div>
      </Section>
    </div>
  );
}
