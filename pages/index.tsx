import type { NextPage } from 'next';
import Footer from '../components/Footer';
import GradientBg from '../components/GradientBg';
import Head from '../components/Head';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <main className='relative min-h-screen grid justify-items-center items-end '>
        <GradientBg />
        <h1 className='text-7xl font-semibold place-self-center'>
          Hi I&#39;m Théo, <br />
          <span className='font-bold bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 bg-clip-text text-transparent'>
            Software developer
          </span>
        </h1>
        {/* <Projects /> */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
