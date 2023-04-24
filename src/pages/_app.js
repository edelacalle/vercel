import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log("EN APP");
  return <Component {...pageProps} />
}
