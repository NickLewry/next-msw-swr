import React from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}
