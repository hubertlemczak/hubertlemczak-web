import { Link } from 'react-scroll';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DarkModeSVG } from '../../assets/dark-mode.svg';
import mobileMenu from '../../assets/mobile-menu.svg';

const NavBar = () => {
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="navigation-gradient z-50 fixed right-0 left-0 top-0 px-4">
      <nav className="mx-auto max-w-1600 flex justify-between items-center h-32">
        <Link to="home" offset={-150} duration={500} smooth={true}>
          <Logo
            className="cursor-pointer fill-black dark:fill-white"
            aria-label="Home"
            title="Home"
          />
        </Link>
        <img className="cursor-pointer lg:hidden" src={mobileMenu} alt="" />

        <ul className="hidden lg:flex items-center dark:text-white gap-10 ">
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
          <li className="cursor-pointer" onClick={handleThemeToggle}>
            <DarkModeSVG className="fill-black dark:fill-white" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
