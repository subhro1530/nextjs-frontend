import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {/* Redux Provider */}
      <Provider store={store}>
        {/* Mantine Provider for global styles and theme */}
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light', // Override theme as needed
          }}
        >
          {/* Google OAuth Provider for OAuth authentication */}
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          >
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </MantineProvider>
      </Provider>
    </>
  )
}
