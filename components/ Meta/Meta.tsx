import * as React from 'react'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Hey, my name is Alejandro Roman, I am software engineer based out of Miami, FL"
      ></meta>
      <meta
        name="keywords"
        content="ReactJS,React,Redux,Testing,HTML,CSS,XML,JavaScript"
      ></meta>
      <meta name="author" content="Alejandro Roman"></meta>
    </Head>
    <style jsx global>
      {`
        body {
          background: #f9f7f7;
          font: 14px menlo;
          color: #112d4e;
        }
      `}
    </style>
  </div>
)
