const NavBar = () => {
  return (
    <header className="sticky top-0 left-0 w-full border-b-2 border-white bg-black text-white h-14">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        <h4 className="absolute">Théo Lévêque</h4>
        <nav className="mx-auto">
          <ul className="flex gap-4 font-semibold uppercase">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
