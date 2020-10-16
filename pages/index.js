import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my blog, thanks for stopping by!</p>
        <p>I'm building a site using <a href="https://nextjs.org/">Next.js</a>.</p>
      </section>
    </Layout>
  )
}
