import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Righteous&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
