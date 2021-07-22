import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap"/>
        <title>Mazeika LLC</title>
      </Head>
      {children}
    </>
  )
}
