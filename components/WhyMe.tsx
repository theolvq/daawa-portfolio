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
        {/* Todo: add more details as yo why employers should hire me, maybe an interesting story */}
        <h3 className='sm:pb-32 md:pb-16 pb-48 text-white'>
          The Tech I Work With
        </h3>
      </div>
      <div className='flex flex-col items-center'>
        <TechList />
      </div>
    </section>
  );
};

export default WhyMe;
