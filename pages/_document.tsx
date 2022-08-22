import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          {/* HTML Meta Tags */}
          <meta
            name="description"
            content="Learn, compete and create in the new data economy. Use Algovera’s software to build and launch your own AI business, or earn by contributing to one."
          />
          {/* Google / Search Engine Tags */}
          <meta
            itemProp="name"
            content="Algovera - AI Creator Economy Platform"
          />
          <meta
            itemProp="description"
            content="Learn, compete and create in the new data economy. Use Algovera’s software to build and launch your own AI business, or earn by contributing to one."
          />
          <meta
            itemProp="image"
            content="https://hithesh98.github.io/image-api/algovera/LogoWithBG.png"
          />
          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://www.algovera.ai" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Algovera - AI Creator Economy Platform"
          />
          <meta
            property="og:description"
            content="Learn, compete and create in the new data economy. Use Algovera’s software to build and launch your own AI business, or earn by contributing to one."
          />
          <meta
            property="og:image"
            content="https://hithesh98.github.io/image-api/algovera/LogoWithBG.png"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Algovera - AI Creator Economy Platform"
          />
          <meta
            name="twitter:description"
            content="Learn, compete and create in the new data economy. Use Algovera’s software to build and launch your own AI business, or earn by contributing to one."
          />
          <meta
            name="twitter:image"
            content="https://hithesh98.github.io/image-api/algovera/LogoWithBG.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
