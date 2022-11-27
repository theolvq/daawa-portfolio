import type { NextPage } from 'next';
import Footer from '../components/Footer';
import GradientBg from '../components/GradientBg';
import Head from '../components/Head';
import Heading from '../components/Heading';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <main className='relative min-h-screen grid grid-rows-2-push-bottom'>
        <GradientBg />
        <Heading />
        {/* <Projects /> */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
