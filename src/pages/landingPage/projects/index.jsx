import CLASSABLE from '../../../assets/images/classable.png';
import CHATAPP from '../../../assets/images/chat-app.png';
import CATHORT6 from '../../../assets/images/cathort6.png';
import CLONES from '../../../assets/images/clones.png';
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
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          theme="bg-[#2BC48A]"
          image={CLASSABLE}
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
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          theme="bg-[#FDA172]"
          image={CHATAPP}
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
          theme="bg-[#d95d5d]"
          image={CATHORT6}
          path="cathort-6"
        />
        <Project
          title="Clones"
          description="Clones of various websites including Spotify and challenges from Frontend Mentor"
          tools={[]}
          image={CLONES}
          path="clones"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Projects;
