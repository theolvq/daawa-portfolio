import React, { FC, ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

const ExternalLink: FC<Props> = ({ href, children }) => {
  return (
    <a
      className='text-blue-800 font-semibold border-b  border-b-blue-800 '
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};

export default ExternalLink;
