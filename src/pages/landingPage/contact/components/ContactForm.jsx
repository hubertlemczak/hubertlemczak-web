import FormInput from '../../../../components/FormInput';
import FormTextArea from '../../../../components/FormTextArea';
import { ReactComponent as SendSVG } from '../../../../assets/send.svg';

const ContactForm = () => (
  <form name="contact" method="post">
    <input type="hidden" name="form-name" value="contact" />
    <FormInput label="Name" type="text" name="name" id="contactName" required />
    <FormInput
      label="Email"
      type="email"
      name="email"
      id="contactEmail"
      required
    />

    <FormTextArea
      label="Message"
      name="message"
      id="contactMessage"
      cols="30"
      rows="7"
      required
    />
    <button
      type="submit"
      className="relative flex items-center justify-between rounded-md p-3 w-2/5 bg-white dark:bg-darkBG my-4 px-4 transition-all duration-300 hover:bg-textHeading dark:hover:bg-darkBGHover"
    >
      <span className="text-xl dark:text-textPara">Send</span>
      <SendSVG className="w-5 lg:w-6 stroke-black dark:stroke-textPara" />
    </button>
  </form>
);

export default ContactForm;
