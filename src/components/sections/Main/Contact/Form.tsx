import useSubmitForm from "../../../../hooks/useSubmitForm";
import FormButton from "./FormButton";
import { motion } from "motion/react";

const Form = () => {
  const { handleSubmit, success, error, isSending, formData, setFormData } =
    useSubmitForm();
  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
      whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "backIn" }}
      className="border-green/40 w-full rounded-3xl border bg-[#151E23] px-5 py-8 lg:px-10 lg:py-12"
    >
      <form
        className="flex h-full w-full flex-col justify-between gap-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-sm tracking-wide text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          required
          className="focus:border-green -mt-4 rounded-lg border-2 border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:text-white focus:outline-none"
          placeholder="Your name"
        />
        <label htmlFor="email" className="text-sm tracking-wide text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          required
          className="focus:border-green -mt-4 rounded-lg border-2 border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:text-white focus:outline-none"
          placeholder="Your email"
        />
        <label htmlFor="message" className="text-sm tracking-wide text-white">
          Message
        </label>
        <textarea
          rows={8}
          name="message"
          id="message"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          required
          className="focus:border-green -mt-4 resize-none rounded-lg border-2 border-gray-700/50 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:text-white focus:outline-none"
          placeholder="Your message"
        ></textarea>
        {error.status !== 0 && (
          <p className="text-center text-sm tracking-wide text-red-500/80">
            {error.text}
          </p>
        )}
        <FormButton success={success} error={error} isSending={isSending} />
      </form>
    </motion.div>
  );
};

export default Form;
