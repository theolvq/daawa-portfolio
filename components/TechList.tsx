import React from 'react';
import logos from '../public/logos';
import TechListItem from './TechListItem';

const TechList: React.FC = () => {
  return (
    <div className='transform -translate-y-1/2 p-8 mx-4  flex flex-wrap justify-center gap-x-2 gap-y-6 bg-white-trans backdrop-filter backdrop-blur-md max-w-6xl rounded-2xl shadow-lg'>
      {logos.map((logo) => (
        <TechListItem key={logo.id} logo={logo} />
      ))}
    </div>
  );
};

export default TechList;
