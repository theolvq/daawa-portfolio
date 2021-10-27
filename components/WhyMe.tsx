import React from 'react';
import { SectionProps } from '../types';
import TechList from './TechList';
import WhyMeList from './WhyMeList';

const WhyMe: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <section onWheel={handleScroll} id='why-me'>
      <div className='bg-black py-16 text-center '>
        <h2 className='text-white'>Why Me?</h2>
        <WhyMeList />

        <h3 className='pb-32 text-white'>The Tech I Work With</h3>
      </div>
      <div className='flex flex-col items-center'>
        <TechList />
      </div>
    </section>
  );
};

export default WhyMe;
