import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>foldleft</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
