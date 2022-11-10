import { useEffect } from 'react';
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(null);

  useEffect(() => {
    const sessionTheme = sessionStorage.getItem('hubertlemczak-dark-mode');
    if (sessionTheme === 'false') {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }, []);

  function handleThemeToggle() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
      sessionStorage.setItem('hubertlemczak-dark-mode', true);
      setDarkTheme(true);
    } else {
      sessionStorage.setItem('hubertlemczak-dark-mode', false);
      setDarkTheme(false);
    }
  }

  if (darkTheme === null) return;

  return (
    <ThemeContext.Provider value={{ darkTheme, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
