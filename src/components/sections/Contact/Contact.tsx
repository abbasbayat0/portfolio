import Title from "../../ui/Title";
import ContactInformation from "./ContactInformation";
import Form from "./Form";

const Contact = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col items-center justify-center md:mx-auto md:max-w-2xl lg:max-w-full">
      <Title
        title="get in touch"
        description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together."
      >
        <p className="font-inter text-green mt-5 text-center font-bold">
          Let's build{" "}
          <span className="georgia text-white italic">something great.</span>
        </p>
      </Title>

      <section className="mt-20 flex w-full flex-col gap-14 lg:max-w-5xl lg:flex-row">
        <Form />
        <ContactInformation />
      </section>
    </article>
  );
};

export default Contact;
