import ContactForm from './components/ContactForm';
import Socials from './components/Socials';

const Contact = () => {
  return (
    <section
      className="flex flex-col mx-auto px-4 relative py-20 pb-32 xs:items-center md:px-0 lg:block max-w-1220"
      id="contact"
    >
      <div>
        <h3 className="font-bold text-4xl dark:text-textHeading my-7 lg:text-5xl lg:mt-0 lg:mb-11">
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
