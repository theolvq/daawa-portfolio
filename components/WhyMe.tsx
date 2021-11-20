import React from 'react';
import { InView } from 'react-intersection-observer';
import { SectionProps } from '../types';
import TechList from './TechList';
import WhyMeList from './WhyMeList';

const WhyMe: React.FC<SectionProps> = ({ handleSectionChange }) => {
  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='why-me' className='mb-16'>
          <div className='bg-black py-16 text-center min-h-screen'>
            <h2 className='text-white '>Why Me?</h2>
            <WhyMeList />
            {/* Todo: add more details as to why employers should hire me, maybe an interesting story */}
            <h3 className='text-white'>The Tech I Work With</h3>
          </div>
          <div>
            <div className='relative flex flex-col items-center'>
              <TechList />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default WhyMe;
