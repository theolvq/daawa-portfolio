import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Théo Lévêque</title>
        <meta name='description' content="Théo Lévêque's personal website" />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className='min-h-screen grid place-items-center'>
        <h1>
          Hi I&#39;m Théo, <br />
          Front end developer
        </h1>
      </main>
    </div>
  );
};

export default Home;
