import About from './about';
import Contact from './contact';
import Home from './home';
import Projects from './projects';

const LandingPage = () => {
  return (
    <div className="sm:px-5">
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default LandingPage;
