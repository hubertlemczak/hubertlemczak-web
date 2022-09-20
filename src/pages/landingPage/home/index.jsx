import { ReactComponent as HeroSVG } from '../../../assets/hero.svg';
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg';
import Button from '../../../components/Button';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="relative max-w-1220 mx-auto " id="home">
      <div className="flex flex-col items-center lg:block py-48 lg:py-64">
        <div className="max-w-325 mx-auto md:max-w-none px-2">
          <h1 className="dark:text-textHeading text-6xl max-w-lg md:text-7xl font-bold leading-tight lg:max-w-xl">
            Delivering quality for your users
          </h1>
          <p className="dark:text-textPara md:text-lg max-w-md py-12">
            I build responsive web apps with a focus on clean and organised
            code.
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
              <Button buttonContent="search" search="stroke-white">
                View Projects
              </Button>
            </Link>
            <ArrowSVG className="fill-black dark:fill-white mt-10" />
          </div>
        </div>
      </div>
      <HeroSVG className="absolute scale-50 -top-1/3 right-1/2 translate-x-1/2 md:z-10 lg:scale-110 lg:-top-40 lg:-right-1/3 lg:translate-x-44" />
    </section>
  );
};

export default Home;
