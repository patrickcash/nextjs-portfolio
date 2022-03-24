import siteMetadata from '../data/siteMetadata'
import { PageSEO } from '../components/SEO'
import About from './about'

export default function Home() {
  return (
    <div >
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}
