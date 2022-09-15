import ContactForm from './components/ContactForm';
import Socials from './components/Socials';

const Contact = () => {
  return (
    <section
      className="flex flex-col mx-auto px-4 relative py-24 xs:items-center md:px-0 lg:block max-w-1220"
      id="contact"
    >
      <div>
        <h3 className="font-bold text-4xl text-textHeading dark:text-yellow-600 my-7 lg:text-5xl lg:mt-0 lg:mb-11">
          Get in touch
        </h3>
        <div className="grid gap-20 max-w-1220 mx-auto lg:grid-cols-2 lg:gap-0 lg:mt-10">
          <ContactForm />
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Contact;
