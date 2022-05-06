import React from 'react';
import { InView } from 'react-intersection-observer';
import projects from '../lib/projects';
import { SectionProps } from '../types';
import MyWorkCard from './MyWorkCard';

const MyWork: React.FC<SectionProps> = ({ handleSectionChange }) => {
  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='my-work' className='w-full '>
          <div className='mx-auto max-w-6xl py-16 md:px-8'>
            <h2>My Work</h2>
            <div className='space-y-8'>
              {projects.map((project) => (
                <MyWorkCard project={project} key={project.title} />
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default MyWork;
