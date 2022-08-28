import Head from 'next/head'
import Image from 'next/image'
import HeadlineComponent from '../components/Headline.component'


export default function Home() {
  return (
    <>
      <Head>
        <title>HealthiApp | Home</title>
      </Head>
      <HeadlineComponent/>
    </>
  )
}
