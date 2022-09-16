import { ReactComponent as HeroSVG } from '../../assets/hero.svg';
import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section
      className="relative overflow-visible max-w-1220 mx-auto "
      id="home"
    >
      <div className="flex flex-col items-center lg:block py-60 lg:py-64">
        <div className="max-w-325 mx-auto md:max-w-none px-2">
          <h1 className="dark:text-textHeading text-5xl max-w-lg md:text-7xl font-bold leading-tight lg:max-w-xl">
            I&apos;m Hubert, <br /> a Full-Stack Dev
          </h1>
          <p className="dark:text-textPara md:text-lg max-w-md py-12">
            I&apos;m a Software Developer based in London. I build responsive
            web apps with a focus on clean and organised code.
          </p>
          <div className="flex flex-col items-center md:block">
            <Link
              to="projects"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
            >
              <Button buttonContent="search">View Projects</Button>
            </Link>
            <ArrowSVG className="fill-black dark:fill-white mt-10" />
          </div>
        </div>
      </div>
      <HeroSVG className="absolute -z-10 scale-50 -top-1/3 right-1/2 translate-x-1/2 md:z-10 lg:scale-110 lg:-top-40 lg:-right-1/3 lg:translate-x-44" />
    </section>
  );
};

export default Home;
