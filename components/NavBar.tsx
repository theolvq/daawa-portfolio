import React, { useState } from "react";

interface NavBarProps {
  scrollTarget: string;
}

const NavBar: React.FC<NavBarProps> = ({ scrollTarget }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="sticky z-50 top-0 left-0  bg-black text-white h-16">
      <div className="flex items-center justify-between h-full max-w-6xl mx-auto px-4">
        <h4 className="lg:absolute bg-gradient-to-br from-white to-pink via-cyan bg-clip-text text-transparent ">
          <span>Théo</span> <span className="">Lévêque</span>
        </h4>
        <nav className="mx-auto hidden lg:block">
          <ul className="flex gap-8 font-semibold uppercase text-xl">
            <li
              className={`nav-items ${
                scrollTarget === "hero" && "border-opacity-100"
              }`}
            >
              <a href="#hero">Home</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === "why-me" && "border-opacity-100"
              }`}
            >
              <a href="#why-me">Why Me?</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === "my-work" && "border-opacity-100"
              }`}
            >
              <a href="#my-work">My Work</a>
            </li>
            <li
              className={`nav-items ${
                scrollTarget === "contact" && "border-opacity-100"
              }`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button onClick={() => setShowNav((prev) => !prev)}>
          {!showNav ? (
            <svg
              className="lg:hidden w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              className="lg:hidden w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
