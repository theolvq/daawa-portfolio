import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MyWork from '../components/MyWork';
import NavBar from '../components/NavBar';
import WhyMe from '../components/WhyMe';

const Home: NextPage = () => {
  const [scrollTarget, setScrollTarget] = useState('hero');
  const [showNav, setShowNav] = useState(false);

  const handleNavClose = (): void => {
    if (showNav) {
      setShowNav(false);
    }
  };

  const handleSectionChange = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setScrollTarget(entry.target.id);
    }
  };

  return (
    <div>
      <Head>
        <title>Théo Lévêque</title>
        <meta name='description' content="Théo Lévêque's personal website" />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <NavBar scrollTarget={scrollTarget} showNav={showNav} setShowNav={setShowNav} />
      <main onClick={handleNavClose}>
        <Hero setScrollTarget={setScrollTarget} handleSectionChange={handleSectionChange} />
        <WhyMe setScrollTarget={setScrollTarget} handleSectionChange={handleSectionChange} />
        <MyWork setScrollTarget={setScrollTarget} handleSectionChange={handleSectionChange} />
        <Contact setScrollTarget={setScrollTarget} handleSectionChange={handleSectionChange} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
