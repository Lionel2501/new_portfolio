import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* title */}
      <title>Lionel Cassar Dev</title>
      {/* metas */}
      <meta charSet="utf-8" />
      <meta name="author" content="themepaa" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="keywords" content="Lionel Cassar dev" />
      <meta name="description" content="Lionel Cassar dev" />
      <Head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        {/* plugin CSS */}
        <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="static/plugin/font-awesome/css/all.min.css" rel="stylesheet"/>
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet"/>
        <link href="static/plugin/owl-carousel/css/owl.carousel.min.css"/>
        <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet"/>
        {/* theme css */}
        <link href="static/style/master.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
