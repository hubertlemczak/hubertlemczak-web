import Title from '../../../components/Title';
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
          <h3 className="font-bold text-4xl dark:text-textHeading my-7 lg:text-5xl lg:mt-0 lg:mb-11">
            My Programming Journey
          </h3>
          <p className="dark:text-textPara text-justify leading-8 lg:text-22 lg:leading-10">
            Hi I&apos;m Hubert, a full-stack dev. I&apos;m a Software Developer
            based in London. Search and copy any text in this image with Gyazo
            Pro.Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.Search and copy any text in this image with Gyazo
            Pro.Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.Search and copy any text in this image with Gyazo
            Pro.Search and copy any text in this image with Gyazo Pro.
          </p>
        </div>
        <div className="max-w-sm lg:max-w-none lg:mt-36">
          <p className="dark:text-textPara text-justify leading-8 lg:text-22 lg:leading-10">
            Search and copy any text in this image with Gyazo Pro.Search and
            copy any text in this image with Gyazo Pro.Search and copy any text
            in this image with Gyazo Pro.Search and copy any text in this image
            with Gyazo Pro.
          </p>
          <h4 className="font-bold text-sm dark:text-textHeading mt-7 mb-2">
            My Skills
          </h4>
          <p className="text-xs dark:text-textPara text-justify">
            React, HTML, CSS, JavaScript, TypeScript, GIT, Node.js, Prisma, SQL,
            Express, GitHub, Postgres, TailwindCSS, Styled-Components, Figma,
            Jasmine, Jest, RESTful APIs, Authentication, CI/CD, TDD,
            ElephantSQL, Socket.io
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default About;
