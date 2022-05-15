import React from 'react';
import Image from 'next/image';
import topPattern from '../public/images/hero-pattern-top.svg';
import bottomPattern from '../public/images/hero-pattern-bottom.svg';

const HeroBackground: React.FC = () => {
  return (
    <div className='absolute top-0 left-0 -z-10 hidden h-full w-screen flex-col justify-between md:flex'>
      <div className='-z-10  w-full'>
        <Image src={topPattern} alt='' layout='responsive' />
      </div>
      <div className='-z-10 w-full'>
        <Image src={bottomPattern} alt='' layout='responsive' />
      </div>
    </div>
  );
};

export default HeroBackground;
