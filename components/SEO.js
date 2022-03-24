import Head from 'next/head'
import { useRouter } from 'next/router'

import siteMetadata from '../data/siteMetadata'

const CommonSEO = ({ title, description, ogType }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
    />
  )
}