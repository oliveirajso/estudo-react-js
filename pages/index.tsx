import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Trechos de códigos interessantes, encontrados na internet prontos para uso
      </h1>

      <p className={styles.description}>
        Show My Code{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <div>
          <h2>Exemplos &rarr;</h2>
          <Link
            className={styles.card}
            href={"/persistencia"}
          >
            Exemplos
          </Link>
        </div>

      </div>


    </div>
  )
}

export default Home
