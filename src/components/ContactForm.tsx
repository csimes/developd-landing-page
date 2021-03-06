import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgjywaq");
  if (state.succeeded) {
    return <h3>We'll let you know when the site launches!</h3>;
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Enter your email to be notified:</label>
      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          autoFocus
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
