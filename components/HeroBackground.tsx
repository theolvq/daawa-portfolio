import React from 'react';
import Image from 'next/image';
import topPattern from '../public/images/hero-pattern-top.svg';
import bottomPattern from '../public/images/hero-pattern-bottom.svg';

const HeroBackground: React.FC = () => {
  return (
    <div className='absolute top-0 left-0 -z-10 flex h-full w-screen flex-col justify-between'>
      <div className=' -z-10  w-full'>
        <Image src={topPattern} alt='' layout='responsive' />
      </div>
      <div className=' -z-10 w-full  2xl:w-1/2'>
        <Image src={bottomPattern} alt='' layout='responsive' />
      </div>
    </div>
  );
};

export default HeroBackground;
