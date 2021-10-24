const NavBar = () => {
  return (
    <header className="sticky z-50 top-0 left-0 w-full  bg-black text-white h-14">
      <div className="flex items-center justify-between h-full max-w-6xl mx-auto">
        <h4 className="absolute hidden md:block bg-gradient-to-br from-white to-pink via-cyan bg-clip-text text-transparent ">
          <span>Théo</span> <span className="">Lévêque</span>
        </h4>
        <nav className="mx-auto">
          <ul className="flex gap-8 font-semibold uppercase text-xl">
            <li className="nav-items">
              <a href="#top">Home</a>
            </li>
            <li className="nav-items">
              <a href="#about">Why Me?</a>
            </li>
            <li className="nav-items">
              <a href="#projects">My Work</a>
            </li>
            <li className="nav-items">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
