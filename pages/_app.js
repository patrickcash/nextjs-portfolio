import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="flex flex-col justify-between h-screen">
      <ThemeProvider attribute="class">
        <Navbar />
        <main className="max-w-4xl mx-auto antialiased">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
