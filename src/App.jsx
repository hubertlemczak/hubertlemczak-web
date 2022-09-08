import NavBar from './components/NavBar';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="px-2 max-w-1220 mx-auto md:px-5">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
