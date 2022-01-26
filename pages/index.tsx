// Next
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';




export default function Home() {
  return (
    <div className="min-h-screen bg-body text-white pb-24">
      <Head>
        <title>Tom Young</title>
      </Head>
      <Navbar />
      <Hero />
      <SideMenu />
      <Projects />
      <Footer />
    </div>
  )
}
