import example from '../../assets/example-desktop.png';
import Title from '../../components/Title';
import Project from './components/Project';

const Projects = () => {
  return (
    <section
      className="flex flex-col xs:items-center mx-auto px-4 relative md:px-0 lg:block lg:max-w-none"
      id="projects"
    >
      <Title title="my projects" className="mb-10 lg:-mb-2" />
      <div className="last-of-type:pb-1">
        <Project
          title="Classable"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={['React', 'PostgreSQL', 'Express']}
          image={example}
          path=""
        />
        <Project
          title="Manage"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={['React', 'TailwindCSS']}
          image={example}
          path=""
          reverse={true}
        />
        <Project
          title="Portfolio"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={['React', 'TailwindCSS']}
          image={example}
          path=""
        />
        <Project
          title="Chat App"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={['React', 'PostgreSQL', 'Express']}
          image={example}
          path=""
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Projects;
