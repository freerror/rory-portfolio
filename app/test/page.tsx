import Head from 'next/head'
import siteData from '../../fixtures/siteData.json'
import NavBar from '../../components/NavBar'

export default function Page() {
  return (
    <>
      <Head>
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta name="author" content={siteData.author} />
        <meta name="keywords" content={siteData.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </>
  )
}