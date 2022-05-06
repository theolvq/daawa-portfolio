import React from 'react';
import { InView } from 'react-intersection-observer';
import { SectionProps } from '../types';
import TechList from './TechList';
import WhyMeList from './WhyMeList';

const WhyMe: React.FC<SectionProps> = ({ handleSectionChange }) => {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='why-me'>
          <div className='relative bg-black py-16 text-center'>
            <h2 className='text-white'>Why Me?</h2>
            <WhyMeList />
            {/* Todo: add more details as to why employers should hire me, maybe an interesting story */}
            <h3 className='pb-48 text-white sm:pb-32 md:pb-16'>The Tech I Work With</h3>
          </div>
          <div className='flex flex-col items-center'>
            <TechList />
          </div>
        </section>
      )}
    </InView>
  );
};

export default WhyMe;
