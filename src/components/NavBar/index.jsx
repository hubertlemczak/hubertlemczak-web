import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <header className="navigation-gradient z-50 fixed right-0 left-0 top-0 pr-2 pl-5">
      <nav className="mx-auto max-w-1600 flex justify-between items-center h-32">
        <Link to="home" offset={-150} duration={500} smooth={true}>
          <img className="cursor-pointer" src={logo} alt="Logo." />
        </Link>
        <ul className="hidden lg:flex text-white gap-20 ">
          <li className="w-20 text-center py-3 cursor-pointer">
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
          <li className="w-24 text-center py-3 cursor-pointer">
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
          <li className="w-20 text-center py-3 cursor-pointer">
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
          <li className="w-20 text-center py-3 cursor-pointer">
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
