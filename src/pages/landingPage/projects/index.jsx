import CLASSABLE from '../../../assets/images/classable.png';
import CHATTER from '../../../assets/images/chatter.png';
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
          description="A feature rich full-stack application designed for online education. Aims to provide an efficient digital community for students and academic staff. Featuring a highly interactive UI, live notifications, chats, resource storage and video call functionality. Let the learning begin with Classable."
          tools={[
            'React',
            'TypeScript',
            'Express',
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          theme="bg-[#122e20]"
          image={CLASSABLE}
          path="classable"
        />

        <Project
          title="Cathort 6"
          description="Designed and delivered an ecommerce store using Stripe to handle payment processes, Firebase to store data, handle authentication and allow 'Google Sign-in', styled components for smooth transitions and animations. "
          tools={['React', 'Firebase', 'Stripe', 'Styled-Components']}
          theme="bg-[#581f1f]"
          image={CATHORT6}
          path="cathort-6"
          reverse={true}
        />

        <Project
          title="Chatter"
          description="Interactive chat application designed for business and leisure purposes. Featuring authentication, private and group messaging delivered with the Socket.io library for live data transmission."
          tools={[
            'React',
            'TypeScript',
            'Express',
            'Postgres',
            'Tailwind',
            'Socket.io',
          ]}
          theme="bg-[#9b2f00]"
          image={CHATTER}
          path="chatter"
        />

        <Project
          title="Clones"
          description="Clones of websites, for targeted skills development, including Spotify and challenges from Frontend Mentor"
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
