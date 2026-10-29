import { Head, Html, Main, NextScript, type DocumentProps } from "next/document"

// Applies a remembered dark theme before the first paint, so there's no flash.
const themeInit = `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.dataset.theme="dark";document.querySelector('meta[name="theme-color"]').content="#0A0A0B"}}catch(e){}`

// The Arabic page lives under /ar and is rendered right-to-left at the <html> level.
export default function Document(props: DocumentProps) {
  const page = props.__NEXT_DATA__.page
  const isArabic = page === "/ar" || page.startsWith("/ar/")
  return (
    <Html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"}>
      <Head>
        <meta name="theme-color" content="#FAFAF9" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
