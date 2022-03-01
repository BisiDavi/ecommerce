import Head from "next/head";
import Script from "next/script";

export default function LayoutMetatag() {
  return (
    <>
      <Script strategy="afterInteractive" id="vboutTrackingCodeScript">
        {`
          var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-43304-6887']);
          _vbset.push(['_domain', 'https://livehealthy.hk']);

          (function() {
            var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
            vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
          })();
        `}
      </Script>
      <Head>
        <meta name="robots" content="noindex" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" color="#fe6a6a" href="/safari-pinned-tab.svg" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="jzOTMxF7oUbLPiv-axyDSRh7yVdltNu-gP2gKfcBIpc"
        />
      </Head>
    </>
  );
}
