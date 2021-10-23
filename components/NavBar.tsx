const NavBar = () => {
  return (
    <header className="sticky w-full flex items-center justify-between bg-black text-white h-14">
      <h4 className="absolute left-4">Théo Lévêque</h4>
      <nav className="mx-auto">
        <ul className="flex gap-4 font-semibold">
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
    </header>
  );
};

export default NavBar;
