import { useState } from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as DarkModeSVG } from '../../../assets/dark-mode.svg';
import { ReactComponent as LightModeSVG } from '../../../assets/light-mode.svg';
import { useTheme } from '../../../context/ThemeContext';

const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const { handleThemeToggle } = useTheme();

  const toggleMenu = () => {
    if (menuIsOpen) {
      setFadeOut(true);
    } else {
      setMenuIsOpen(true);
    }
  };
  return (
    <>
      <div
        className={`hamburger relative flex flex-col gap-1.5 lg:hidden cursor-pointer z-20 `}
        onClick={toggleMenu}
      >
        <span
          className={`${
            menuIsOpen && 'nav-menu-open-one'
          } w-6 h-px bg-black dark:bg-white ${fadeOut && 'fade-out-one'}`}
        ></span>
        <span
          className={`${
            menuIsOpen && 'nav-menu-open-two'
          } w-6 h-px bg-black dark:bg-white`}
        ></span>
        <span
          className={`${
            menuIsOpen && 'nav-menu-open-three'
          } w-6 h-px bg-black dark:bg-white ${fadeOut && 'fade-out-three'}`}
          onAnimationEnd={e => {
            if (e.animationName === 'threeB') {
              setFadeOut(false);
              setMenuIsOpen(false);
            }
          }}
        ></span>
      </div>
      {menuIsOpen && (
        <>
          <div
            className="duration-500 fixed inset-0 bg-bgLight dark:bg-darkBG opacity-95 cursor-default"
            onClick={toggleMenu}
          ></div>
          <ul
            onClick={toggleMenu}
            className={`animation-menu flex flex-col text-start fixed z-10 h-full px-14 py-20 font-bold dark:text-white ${
              fadeOut && 'nav-fade-out'
            }`}
          >
            <li className="w-24 py-3 cursor-pointer">
              <Link
                to="home"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="w-24 py-3 cursor-pointer">
              <Link
                to="projects"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={500}
              >
                projects
              </Link>
            </li>
            <li className="w-24 py-3 cursor-pointer">
              <Link
                to="about"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="w-24 py-3 cursor-pointer">
              <Link
                to="contact"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={500}
              >
                contact
              </Link>
            </li>
            <li
              className="cursor-pointer w-5 mt-auto"
              onClick={e => {
                e.stopPropagation();
                handleThemeToggle();
              }}
            >
              <DarkModeSVG className="hidden dark:fill-white dark:block" />
              <LightModeSVG className="fill-black dark:hidden" />
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default MobileMenu;
