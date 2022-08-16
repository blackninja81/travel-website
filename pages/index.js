import Head from 'next/head'
import { Navbar } from '../components/Nav'
import {HomeSection} from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import Destination from '../components/Destinations'
import NewsSection from '../components/NewsSection'
import Contact from '../components/Contact'
import Footer from '../components/footer'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Travel Agency</title>
                <meta name="description" content="Book a trip to your destination"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap" rel="stylesheet"></link>
            </Head>
            <HomeSection/>
            <AboutSection/>
            <Services/>
            <Destination/>
            {/* <NewsSection/> */}
            <Contact/>
            <Footer/>
        </div>
    )
}
