import NavBar from './components/NavBar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="md:px-5">
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
