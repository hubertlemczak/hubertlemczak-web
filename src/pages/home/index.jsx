import { ReactComponent as HeroSVG } from '../../assets/hero.svg';
import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="relative mx-auto container lg:max-w-7xl" id="home">
      <div className="py-64">
        <h1 className="text-textHeading text-7xl font-bold leading-tight max-w-xl">
          Hi I'm Hubert, <br /> a Full-Stack Dev
        </h1>
        <p className="text-textPara text-lg max-w-md py-12">
          I'm a Software Engineer based in London. I build responsive web apps
          with a focus on clean and organised code.
        </p>
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
        <ArrowSVG className="mt-10" />
      </div>
      <HeroSVG className="absolute -top-32 -right-2/5 -z-10" />
    </section>
  );
};

export default Home;
