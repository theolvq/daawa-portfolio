import type { NextPage } from 'next';
import Head from 'next/head';
import ExternalLink from '../components/ExternalLink';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Nailboo - Underlining',
    category: 'ecommerce',
    techStack: ['Nextjs', 'Theme UI', 'Chord Commerce', 'Contentful'],
    url: 'https://nailboonails.com',
  },
  {
    id: 2,
    title: 'Omorpho',
    category: 'ecommerce',
    techStack: ['Gatsby', 'Theme UI', 'Chord Commerce', 'Contentful'],
    url: 'https://www.omorpho.com',
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Théo Lévêque</title>
        <meta name='description' content="Théo Lévêque's personal website" />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className='min-h-screen grid justify-items-center items-end'>
        <h1 className='text-7xl font-semibold place-self-center'>
          Hi I&#39;m Théo, <br />
          Front end developer
        </h1>
        <section>
          <h2 className=''>Some of the projects I have worked on</h2>
          <div className='flex gap-4'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <footer className='bg-gray-400 min-w-full grid place-items-center'>
          <h2>Find me on the internet</h2>
          <div className='space-x-8'>
            <ExternalLink href='https://www.linkedin.com/in/theoleveque/'>LinkedIn</ExternalLink>
            <ExternalLink href='https://github.com/daawascript'>GitHub</ExternalLink>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
