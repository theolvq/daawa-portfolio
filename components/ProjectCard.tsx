import React, { FC } from 'react';
import { Project } from '../lib';
import ExternalLink from './ExternalLink';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { title, techStack, url } = project;

  const getLinkText = () => url.replace('https://', '');

  return (
    <div className='shadow-sm rounded-md p-4 md:p-6 bg-white w-64 h-48'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <div className='mb-4'>
        {techStack.map((tech, index) => (
          <span
            className='font-medium text-gray-800 text-sm'
            key={`${tech}-${index}`}
          >
            {tech}
            {index < techStack.length - 1 && ' - '}
          </span>
        ))}
      </div>
      <ExternalLink href={url}>{getLinkText()}</ExternalLink>
    </div>
  );
};

export default ProjectCard;
