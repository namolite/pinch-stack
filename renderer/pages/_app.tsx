import Layout from '@Components/layout/Layout'
import '@Styles/globals.css'
import 'rsuite/dist/rsuite-no-reset.min.css'
// import '@Styles/editor.css'
// import '@Styles/editor.scss'
import '@Styles/chat.css'
import type { AppProps } from 'next/app'

import { CustomProvider } from 'rsuite'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CustomProvider>
        <Component {...pageProps}
        />
      </CustomProvider>
    </Layout>
  )
}