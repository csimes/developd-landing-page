import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mrgjywaq');
  if (state.succeeded) {
    return <p>We'll let you know when the site launches!</p>;
  }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label htmlFor='email'>Email Address:</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
