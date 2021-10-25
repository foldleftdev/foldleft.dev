import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FoldLeft</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
