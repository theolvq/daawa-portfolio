import React, { useState } from 'react';

interface NavBarProps {
  scrollTarget: string;
}

const NavBar: React.FC<NavBarProps> = ({ scrollTarget }) => {
  const [showNav, setShowNav] = useState(false);

  const scrollClass = `${
    showNav ? 'translate-x-2' : 'translate-y-2'
  }  text-cyan font-bold`;
  const mobileNavClass =
    'flex-col items-end gap-2 absolute right-0 top-16 bg-black px-8 py-4 w-full z-40';

  return (
    <header className='fixed w-full z-30 top-0 left-0  bg-black text-white h-16'>
      <div className='flex items-center justify-between h-full max-w-6xl mx-auto px-4'>
        <h4 className='lg:absolute bg-gradient-to-br from-white to-pink via-cyan bg-clip-text text-transparent '>
          <span>Théo</span> <span className=''>Lévêque</span>
        </h4>
        <nav className={`mx-auto lg:block ${showNav ? 'block' : 'hidden'} `}>
          <ul
            className={`flex ${
              showNav && mobileNavClass
            } gap-8 font-semibold uppercase text-xl`}
          >
            <li
              className={`nav-items ${scrollTarget === 'hero' && scrollClass}`}
            >
              <a href='#hero'>Home</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === 'why-me' && scrollClass
              }`}
            >
              <a href='#why-me'>Why Me?</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === 'my-work' && scrollClass
              }`}
            >
              <a href='#my-work'>My Work</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === 'contact' && scrollClass
              }`}
            >
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        <button onClick={() => setShowNav((prev) => !prev)}>
          {!showNav ? (
            <svg
              className='lg:hidden w-6 h-6 z-50'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          ) : (
            <svg
              className='lg:hidden w-6 h-6 z-50'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
