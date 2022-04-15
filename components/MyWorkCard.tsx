import React from 'react';
import Image from 'next/image';

interface CardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData;
    alt: string;
    repoUrl: string;
    hostedUrl: string;
  };
}

const MyWorkCard: React.FC<CardProps> = ({ project }) => {
  const { title, description, technologies, image, alt, repoUrl, hostedUrl } =
    project;
  return (
    <section
      className='group mx-8 flex flex-col-reverse items-center gap-8
        rounded-xl shadow-lg sm:my-16 lg:mx-auto lg:flex-row lg:gap-16 lg:even:flex-row-reverse '
    >
      <div className='w-full px-8'>
        <h3 className='leading-none tracking-widest text-purple'>{title}</h3>
        <p className='mb-8 hidden text-sm sm:block'>{description}</p>
        <p className='mb-8 text-sm font-semibold tracking-wide text-black sm:text-lg'>
          {technologies.map((techno, index: number) => (
            <span key={techno}>
              <span>{techno}</span> {index !== technologies.length - 1 && ' / '}{' '}
            </span>
          ))}
        </p>
        <div className='flex items-center justify-center gap-8'>
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
      <div className='relative aspect-[4/3] h-full w-full overflow-hidden object-cover'>
        <Image
          src={image}
          alt={alt}
          className='group rounded-t-xl group-odd:rounded-l-none group-even:rounded-r-none lg:rounded-xl'
          layout='fill'
          loading='eager'
        />
      </div>
    </section>
  );
};

export default MyWorkCard;
