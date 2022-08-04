import Head from 'next/head'
import { HomeSection } from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import ContactForm from '../components/Contact'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="Book a trip to your destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection/>
      <AboutSection/>
      <GallerySection/>
      <ContactForm/>
    </div>
  )
}
