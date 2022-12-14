import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DarkModeSVG } from '../../assets/dark-mode.svg';
import { ReactComponent as LightModeSVG } from '../../assets/light-mode.svg';

import RouterMobileMenu from './components/RouterMobileMenu';

import { useTheme } from '../../context/ThemeContext';

const RouterNavBar = () => {
  const { handleThemeToggle } = useTheme();

  return (
    <>
      <header className="navigation-gradient z-50 fixed right-0 left-0 top-0 px-4">
        <nav className="mx-auto max-w-1600 flex justify-between items-center h-32">
          <Link to={{ pathname: '/', hash: '#home' }} reloadDocument>
            <Logo
              className="cursor-pointer fill-black dark:fill-white"
              aria-label="Home"
              title="Home"
            />
          </Link>
          <RouterMobileMenu />

          <ul className="hidden lg:flex items-center dark:text-white gap-10 ">
            <li className="w-20 text-center py-3 cursor-pointer">
              <Link to={{ pathname: '/', hash: '#home' }} reloadDocument>
                home
              </Link>
            </li>
            <li className="w-24 text-center py-3 cursor-pointer">
              <Link to={{ pathname: '/', hash: '#projects' }} reloadDocument>
                projects
              </Link>
            </li>
            <li className="w-20 text-center py-3 cursor-pointer">
              <Link to={{ pathname: '/', hash: '#about' }} reloadDocument>
                about
              </Link>
            </li>
            <li className="w-20 text-center py-3 cursor-pointer">
              <Link to={{ pathname: '/', hash: '#contact' }} reloadDocument>
                contact
              </Link>
            </li>
            <li className="cursor-pointer" onClick={handleThemeToggle}>
              <DarkModeSVG className="hidden dark:fill-white dark:block" />
              <LightModeSVG className="fill-black dark:hidden" />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default RouterNavBar;
