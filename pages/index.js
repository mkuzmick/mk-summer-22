import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MK Summer</title>
        <meta name="description" content="Next tests for summer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>title of site</h1>
      <Link href="/page2">Page 2</Link>
    </div>
  )
}
