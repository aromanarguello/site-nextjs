import * as React from 'react'
import Head from 'next/head'
export default () => (
  <html lang="en">
    <Head>
      <title>Alejandro Roman - Personal Site</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="description"
        content="Hey, my name is Alejandro Roman, I am software engineer based out of Miami, FL"
      ></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="keywords"
        content="ReactJS,React,NextJS,Redux,Testing,HTML,CSS,XML,JavaScript"
      ></meta>
      <meta name="author" content="Alejandro Roman"></meta>

      <meta property="og:title" content="Alejandro Roman"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:site_name"
        content="I'm Alejandro Roman. I'm a software engineer based in Miami, FL."
      ></meta>
      <meta property="og:url" content="https://alejandroroman.io"></meta>
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dzeqyvxo2/image/upload/v1562175024/headshot_mfr0uy.jpg"
      ></meta>
    </Head>

    <style jsx global>
      {`
        body {
          background: #f9f7f7;
          font: 14px menlo;
          color: #112d4e;
          margin: 0 auto;
        }
      `}
    </style>
  </html>
)
