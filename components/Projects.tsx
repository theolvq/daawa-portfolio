import React from 'react';
import { projects } from '../lib';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className=''>
      <h2 className='mb-2 text-xl font-semibold'>
        Some of the projects I have worked on
      </h2>
      <div className='flex gap-4'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
