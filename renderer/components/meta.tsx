import Head from "next/head";
import Script from "next/script";


interface Props {
  pageTitle: string;
  desc: string;
}

const Meta = ({ pageTitle }: any) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="images/i.ico" />
        <title>{`${pageTitle}`}</title>
        <link rel="icon" href="f.svg" sizes="any" />
        <meta name="description" content="♥" />
      </Head>
      <Script src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossOrigin="anonymous" />
    </>
  )
}

export default Meta