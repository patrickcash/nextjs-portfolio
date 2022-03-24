import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <ThemeProvider attribute="class">
        <Navbar />
        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
