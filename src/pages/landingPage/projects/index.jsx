import EXAMPLE from '../../../assets/example-desktop.png';
import Title from '../../../components/Title';
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
          tools={[
            'React',
            'TypeScript',
            'Express',
            'Prisma',
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          image={EXAMPLE}
          path="classable"
        />
        <Project
          title="Chat App"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={[
            'React',
            'TypeScript',
            'Express',
            'Prisma',
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          image={EXAMPLE}
          path="chat-app"
          reverse={true}
        />
        <Project
          title="Cathort 6"
          description="Search and copy any text in this image with Gyazo Pro.Search and copy
          any text in this image with Gyazo Pro.Search and copy any text in this
          image with Gyazo Pro.Search and copy any text in this image with
          Gyazo."
          tools={['React', 'Firebase', 'Stripe', 'Styled-Components']}
          image={EXAMPLE}
          path="cathort-6"
        />
        <Project
          title="Clones"
          description="Clones of various websites including Spotify and challenges from Frontend Mentor"
          tools={[]}
          image={EXAMPLE}
          path="clones"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Projects;
