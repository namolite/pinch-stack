import Layout from '@Components/layout/Layout'
import '@Styles/globals.css'
import '@Styles/editor.css'
import '@Styles/editor.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}
      />
    </Layout>
  )
}