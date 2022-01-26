// React
import { useState, useEffect, useRef } from 'react';

// Next
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';




export default function Home() {
  // Array containing absolute Y position of home, work and contact sections respectively from the top of the view window.
  const [sectionPositions, setSectionPositions] = useState([0, 0, 0]);

  const sections = ['home', 'work', 'contact'];
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const homeRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  function scrollHandler() {
    setSectionPositions([
      Math.abs(homeRef.current.getBoundingClientRect().top),
      Math.abs(workRef.current.getBoundingClientRect().top),
      Math.abs(contactRef.current.getBoundingClientRect().top),
    ]);

    setCurrentSection(
      sections[sectionPositions.indexOf(Math.min(...sectionPositions))]
    );
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', scrollHandler);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  return (
    <div className="min-h-screen bg-body text-white pb-24">
      <Head>
        <title>Tom Young</title>
      </Head>
      <Navbar />
      <div ref={homeRef}></div>
      <Hero />
      <SideMenu current={currentSection}/>
      <div ref={workRef}></div>
      <Projects />
      <div ref={contactRef}></div>
      <Footer />
    </div>
  )
}
