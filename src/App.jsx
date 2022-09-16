import NavBar from './components/NavBar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <div className="star-bg"></div>
      <div className="transition-all duration-500 overflow-hidden bg-bgLight md:px-5 dark:bg-bgDark">
        <NavBar />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
