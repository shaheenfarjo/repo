import { Head, Html, Main, NextScript, type DocumentProps } from "next/document"

// The Arabic page lives under /ar and is rendered right-to-left at the <html> level.
export default function Document(props: DocumentProps) {
  const isArabic = props.__NEXT_DATA__.page === "/ar" || props.__NEXT_DATA__.page.startsWith("/ar/")
  return (
    <Html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
