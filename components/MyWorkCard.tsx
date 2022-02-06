import React from 'react';
import Image from 'next/image';

interface CardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    repoUrl: string;
    hostedUrl: string;
  };
}

const MyWorkCard: React.FC<CardProps> = ({ project }) => {
  const { title, description, technologies, image, repoUrl, hostedUrl } =
    project;
  return (
    <section className='card'>
      <div className='pb-4 px-8 w-full'>
        <h3 className='text-purple tracking-widest leading-none'>{title}</h3>
        <p className='mb-8 text-sm hidden sm:block  '>{description}</p>
        <p className='sm:text-lg text-sm text-black font-semibold tracking-wide mb-8'>
          {technologies.map((techno, index: number) => (
            <span key={techno}>
              <span>{techno}</span> {index !== technologies.length - 1 && ' / '}{' '}
            </span>
          ))}
        </p>
        <div className='flex gap-8 justify-center items-center'>
          <a
            aria-label={`View ${title}'s live preview'`}
            className='card-btn'
            href={hostedUrl}
            target={title !== 'My Personal Website' ? '_blank' : '_top'}
            rel='noopener noreferrer'
          >
            Live Preview
          </a>{' '}
          <a
            aria-label={`View ${title}'s code on github'`}
            className='card-btn'
            href={repoUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Code
          </a>
        </div>
      </div>
      <div className='relative w-full lg:shadow-lg'>
        <Image
          src={image}
          alt='Screenshot of a weather application'
          className='rounded-t-lg lg:rounded-lg'
          layout='responsive'
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default MyWorkCard;
