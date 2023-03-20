import Head from 'next/head'
import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Letter&apos;s calculator</title>
        <meta name="description" content="Letters calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main>
        <Calculator/>
      </main>
    </>
  )
}
