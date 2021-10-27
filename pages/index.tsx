import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, WheelEventHandler } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MyWork from '../components/MyWork';
import NavBar from '../components/NavBar';
import WhyMe from '../components/WhyMe';

const Home: NextPage = () => {
  const [scrollTarget, setScrollTarget] = useState('');

  const handleScroll: WheelEventHandler<HTMLElement> = (e) => {
    setScrollTarget(e.currentTarget.id);
  };

  return (
    <div>
      <Head>
        <title>Théo Lévêque</title>
        <meta name='description' content="Théo Lévêque's personal website" />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <NavBar scrollTarget={scrollTarget} />
      <main className='min-h-screen'>
        <Hero handleScroll={handleScroll} />
        <WhyMe handleScroll={handleScroll} />
        <MyWork handleScroll={handleScroll} />
        <Contact handleScroll={handleScroll} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
