/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="min-h-full">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Sahil Bhatia - Full Stack Developer with PHP, Laravel, DevOps, TailwindCSS, NextJS" />
          <meta name="og:title" content="About | Sahil Bhatia" />
          <meta name="og:description" content="Sahil Bhatia - Full Stack Developer with PHP, Laravel, DevOps, TailwindCSS, NextJS" />
          <meta name="og:type" content="website" />
          <meta name="twitter:title" content="About | Sahil Bhatia" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="Sahil Bhatia" />
          <meta name="twitter:description" content="Sahil Bhatia: Full Stack Developer with PHP, Laravel, DevOps, TailwindCSS, NextJS" />
          <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          />
          <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MW3VFDX');`}}></script>
        </Head>
        <body className="bg-indigo-50 bg-opacity-50">
          <script
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MW3VFDX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument