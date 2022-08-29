import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="px-8 xl:px-48 py-12">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
