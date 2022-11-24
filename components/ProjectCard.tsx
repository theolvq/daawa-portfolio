import React, { FC } from 'react';
import { Project } from '../types';
import ExternalLink from './ExternalLink';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { title, category, techStack, url } = project;
  return (
    <div>
      <h3>{title}</h3>
      <span>{category}</span>
      <h4>Tech stack</h4>
      <div>
        {techStack.map((tech, index) => (
          <React.Fragment key={`${tech}-${index}`}>
            <span>{tech}</span>
            {index < techStack.length && ' - '}
          </React.Fragment>
        ))}
      </div>
      <ExternalLink href={url}>Live Site</ExternalLink>
    </div>
  );
};

export default ProjectCard;
