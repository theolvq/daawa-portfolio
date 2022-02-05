import React from 'react';
import Image from 'next/image';
import profilePic from '../public/profile-pic.jpg';
import HeroBackground from './HeroBackground';
import { SectionProps } from '../types';
import { InView } from 'react-intersection-observer';

const Hero: React.FC<SectionProps> = ({ handleSectionChange }) => {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='hero' className='h-screen w-full'>
          <div className='max-w-6xl mx-auto lg:py-32 pt-24 px-16 xl:px-12'>
            <HeroBackground />
            <div className='flex flex-col justify-between items-center  gap-8 lg:flex-row lg:items-end'>
              <h1 className='bg-gradient-to-br from-black to-cyan via-purple text-transparent bg-clip-text'>
                Hi I&#39;m Théo!
                <br /> Front-End Developer
              </h1>
              <div className='relative w-[300px]'>
                <Image
                  src='/profile-pic.jpg'
                  alt="Theo Leveque's Portrait"
                  layout='responsive'
                  width={300}
                  height={400}
                  priority={true}
                />
                <div className='background-image' />
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Hero;
