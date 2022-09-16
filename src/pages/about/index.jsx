import Title from '../../components/Title';
import Carousel from './components/Carousel';

const About = () => {
  return (
    <section
      className="flex flex-col mx-auto px-4 relative pt-24 pb-56 xs:items-center md:px-0 lg:block lg:max-w-none"
      id="about"
    >
      <Title title="about me" />
      <div className="grid gap-10 max-w-1220 mx-auto pb-36 lg:gap-20 lg:grid-cols-2 lg:mt-28 xl:gap-32">
        <div className="max-w-sm lg:max-w-none">
          <h3 className="font-bold text-4xl text-textHeading dark:text-yellow-600 my-7 lg:text-5xl lg:mt-0 lg:mb-11">
            My Programming Journey
          </h3>
          <p className="text-textPara text-justify leading-8 lg:text-22 lg:leading-10">
            Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.Search and copy any text in this image with Gyazo
            Pro.Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.Search and copy any text in this image with Gyazo
            Pro.Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.
          </p>
        </div>
        <div className="max-w-sm lg:max-w-none lg:mt-36">
          <p className="text-textPara text-justify leading-8 lg:text-22 lg:leading-10">
            Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.
          </p>
          <h4 className="font-bold text-sm text-textHeading dark:text-yellow-600 mt-7 mb-2">
            My Skills
          </h4>
          <p className="text-xs text-textPara text-justify">
            REACT, HTML, CSS, JAVASCRIPT, TYPESCRIPT, GIT, NODEJS, PRISMA,
            EXPRESS, GITHUB, POSTGRESQL, TAILWINDCSS, STYLED COMPONENTS, FIGMA,
            JASMINE, JEST
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default About;
