import { Link } from 'react-scroll';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DarkModeSVG } from '../../assets/dark-mode.svg';
import { ReactComponent as LightModeSVG } from '../../assets/light-mode.svg';

import './mobileMenu.css';
import MobileMenu from './components/MobileMenu';
import { useTheme } from '../../context/ThemeContext';

const NavBar = () => {
  const { handleThemeToggle } = useTheme();

  return (
    <>
      <header className="navigation-gradient z-50 fixed right-0 left-0 top-0 px-4 ">
        <nav className="mx-auto max-w-1600 flex justify-between items-center h-32">
          <Link to="home" offset={-150} duration={500} smooth={true}>
            <Logo
              className="cursor-pointer fill-black dark:fill-white"
              aria-label="Home"
              title="Home"
            />
          </Link>
          <MobileMenu />

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
                saveHashHistory={false}
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
                saveHashHistory={false}
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
                saveHashHistory={false}
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
                saveHashHistory={false}
              >
                contact
              </Link>
            </li>
            <li className="cursor-pointer w-5" onClick={handleThemeToggle}>
              <DarkModeSVG className="hidden dark:fill-white dark:block" />
              <LightModeSVG className="fill-black dark:hidden" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
