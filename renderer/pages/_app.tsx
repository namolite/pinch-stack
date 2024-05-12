//@ts-ignore
import Layout from '@Components/layout/Layout'
import '@Styles/globals.css'
import 'rsuite/dist/rsuite-no-reset.min.css'
// import '@Styles/editor.css'
// import '@Styles/editor.scss'
import '@Styles/chat.css'
import type { AppProps } from 'next/app'

import { CustomProvider } from 'rsuite'

// FIXME
// export default function App({ Component, pageProps }: AppProps) {
export default function App({ Component, pageProps }: any) {
  return (
    <Layout>
      <CustomProvider>
        <Component {...pageProps}
        />
      </CustomProvider>
    </Layout>
  )
}