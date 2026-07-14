import Title from "../../../ui/Title";
import ContactInformation from "./ContactInformation";
import Form from "./Form";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <article
      id="contact"
      className="relative z-10 mt-36 flex max-w-375 scroll-m-22 flex-col items-center justify-center md:mx-auto md:max-w-2xl lg:max-w-full"
    >
      <motion.div
        initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
        whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn" }}
      >
        <Title
          title="get in touch"
          description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together."
        >
          <p className="text-green mt-5 text-center font-bold">
            Let's build{" "}
            <span className="georgia text-white italic">something great.</span>
          </p>
        </Title>
      </motion.div>
      <section className="mt-20 flex w-full flex-col gap-14 lg:max-w-5xl lg:flex-row">
        <Form />
        <ContactInformation />
      </section>
    </article>
  );
};

export default Contact;
