import React from 'react';
import Image from 'next/image';
import HeroBackground from './HeroBackground';
import { SectionProps } from '../types';
import { InView } from 'react-intersection-observer';

const Hero: React.FC<SectionProps> = ({ handleSectionChange }) => {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='hero' className='h-screen w-full border-b-2 border-black'>
          <div className='mx-auto max-w-6xl px-16 pt-24 md:mb-0 lg:py-32 xl:px-12'>
            <HeroBackground />
            <div className='flex flex-col items-center justify-between  gap-8 lg:flex-row lg:items-end'>
              <h1 className='bg-gradient-to-br from-black via-purple to-cyan bg-clip-text text-transparent'>
                Hi I&#39;m Théo!
                <br /> Front-End Developer
              </h1>
              <div className='relative w-[300px]'>
                <Image
                  src='/images/profile-pic.jpg'
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
