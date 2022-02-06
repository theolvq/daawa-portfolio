import React from 'react';
import Image from 'next/image';

interface ILogo {
  src: string;
  alt: string;
  name: string;
  id: number;
  width: number;
  height: number;
}

interface IProps {
  logo: ILogo;
}

const TechListItem: React.FC<IProps> = ({ logo }) => {
  return (
    <div
      key={logo.id}
      className='group relative w-14 m-auto transform hover:-translate-y-4 transition-transform duration-200'
    >
      <div className='tooltip'>
        <span>{logo.name}</span>
        <div className='tooltip-arrow' />
      </div>
      <Image
        src={logo}
        alt={`${logo.name}'s logo'`}
        width={logo.width}
        height={logo.height}
        layout='responsive'
        placeholder='blur'
        loading='eager'
      />
    </div>
  );
};

export default TechListItem;
