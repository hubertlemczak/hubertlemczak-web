import logo from './assets/logo.svg';
import { ReactComponent as HeroSVG } from './assets/hero.svg';

function App() {
  return (
    <div className="bg-black px-5">
      <div className="container mx-auto xl:max-w-screen-2xl">
        <img src={logo} alt="" width={30} height={30} fill="black" />
      </div>
      <div className="mx-auto max-w-1220 container">
        <HeroSVG />
        <button className="colour-fade text-xl px-5 py-2 rounded-full">
          View Projects
        </button>
      </div>
    </div>
  );
}

export default App;
