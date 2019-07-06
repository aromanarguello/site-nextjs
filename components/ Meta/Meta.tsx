import * as React from 'react'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
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
