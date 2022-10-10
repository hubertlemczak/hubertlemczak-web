import { useState } from 'react';
import FormInput from '../../../../components/FormInput';
import FormTextArea from '../../../../components/FormTextArea';
import { ReactComponent as SendSVG } from '../../../../assets/send.svg';

const INITIAL_CONTACT_FORM = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_CONTACT_FORM);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(curr => ({ ...curr, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await window.Email.send({
        SecureToken: 'cfb7c89a-85b5-4b2f-9687-e7183a3de058',
        To: 'hubertlemczak@gmail.com',
        From: 'web.hubertlemczak@gmail.com',
        Subject: 'PORTFOLIO CONTACT FORM',
        Body: `Name: ${form.name} Email: ${form.email} Message: ${form.message}`,
      });
      console.log(res);
      if (res === 'OK') {
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);

        setError(false);
        setForm(INITIAL_CONTACT_FORM);
      } else throw Error;
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
      <button className="relative flex items-center justify-between rounded-md p-3 w-2/5 bg-white dark:bg-darkBG my-4 px-4 transition-all duration-300 hover:bg-textHeading dark:hover:bg-darkBGHover">
        <span className="text-xl dark:text-textPara">Send</span>
        <SendSVG className="w-5 lg:w-6 stroke-black dark:stroke-textPara" />
        {messageSent && <div className="absolute -right-20">success</div>}
        {error && <div className="absolute -right-20">error</div>}
      </button>
    </form>
  );
};

export default ContactForm;
