import ContactForm from "../components/contactForm";
const Contact = () => {
  return (
    <section className="md:p-24 p-12 flex md:mt-20 mt-10 md:gap-20 gap-10 md:flex-row flex-col">
      <div className="md:w-96">
        <h3>Contact us</h3>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
