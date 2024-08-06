import ContactForm from "../components/contactForm";
const Contact = () => {
  return (
    <section className="md:p-24 p-12 flex md:mt-20 mt-10 md:gap-20 gap-10 md:flex-row flex-col justify-between w-full">
      <div className="md:w-96">
        <h2 className="text-3xl font-bold md:w-96">Contact us</h2>
      </div>
      <div className="w-7/12">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
