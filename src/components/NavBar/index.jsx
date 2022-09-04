import { Link } from 'react-scroll';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <header className="bg-gradient-to-b from-black via-black to-transparent z-10 fixed right-0 left-0 top-0">
      <nav className="mx-auto max-w-1660 flex justify-between items-center h-32">
        <Logo />
        <ul className="flex text-white gap-20 ">
          <li className="w-20 text-center py-3">
            <Link
              to="home"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
              className="py-3 px-2"
            >
              home
            </Link>
          </li>
          <li className="w-24 text-center py-3">
            <Link
              to="projects"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
              className="py-3 px-3"
            >
              projects
            </Link>
          </li>
          <li className="w-20 text-center py-3">
            <Link
              to="about"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
              className="py-3 px-2"
            >
              about
            </Link>
          </li>
          <li className="w-20 text-center py-3">
            <Link
              to="contact"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
              className="py-3 px-2"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
