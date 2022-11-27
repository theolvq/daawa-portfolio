import React from 'react';
import { footerLinks } from '../lib';
import ExternalLink from './ExternalLink';

const Footer = () => {
  return (
    <footer className='min-w-full grid place-items-center py-6 border-t border-t-gray-400/30'>
      <h2 className='mb-2 text-gray-800'>Find me on the internet</h2>
      <div className='space-x-8'>
        {footerLinks.map((link) => (
          <ExternalLink key={link.id} href={link.url}>
            {link.text}
          </ExternalLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
