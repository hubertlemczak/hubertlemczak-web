import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import FormTextArea from '../../../components/FormTextArea';
import { ReactComponent as SendSVG } from '../../../assets/send.svg';

const INITIAL_CONTACT_FORM = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_CONTACT_FORM);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(curr => ({ ...curr, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // send me email with form data
    setForm(INITIAL_CONTACT_FORM);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        name="name"
        id="contactName"
        value={form.name}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        id="contactEmail"
        value={form.email}
        onChange={handleChange}
        required
      />

      <FormTextArea
        label="Message"
        name="message"
        id="contactMessage"
        cols="30"
        rows="7"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className="flex items-center justify-between rounded-md p-3 w-2/5 bg-cardBg my-4 px-4 ">
        <span className="text-xl text-textPara">Send</span>
        <SendSVG className="w-5 lg:w-6" />
      </button>
    </form>
  );
};

export default ContactForm;
