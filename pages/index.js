import Navbar from "../components/Navbar/Navbar.component";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="اخذ پذیرش دانشگاه های آلمان پذیرش دانشگاه آموزش آلمانی دانشگاه آلمان آلمان ویزا دانشجویی ترجمه آلمانی "
        />
        <meta
          name="description"
          content="اخذ پذیرش دانشگاه های آلمان پذیرش دانشگاه آموزش آلمانی دانشگاه آلمان آلمان ویزا دانشجویی ترجمه آلمانی "
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/Vazir:400;700" rel="stylesheet" />

        <title>Merli-Apply</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/193d912728.js"
        crossOrigin="anonymous"
      ></Script>
      <Navbar />
    </>
  );
}
