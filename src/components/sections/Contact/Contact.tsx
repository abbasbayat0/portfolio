import { Send } from "lucide-react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";

const Contact = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col items-center justify-center">
      <Title
        title="get in touch"
        description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together."
      >
        <p className="font-inter mt-5 text-center font-bold text-green">
          Let's build{" "}
          <span className="georgia text-white italic">something great.</span>
        </p>
      </Title>

      <section className="mt-20 flex w-full flex-col">
        <div className="w-full rounded-2xl border border-green/40 bg-[#151E23] px-4 py-8">
          <form
            action=""
            className="flex h-full w-full flex-col justify-between gap-6"
          >
            <label htmlFor="name" className="font-inter text-sm text-white/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="font-inter -mt-4 rounded-lg border border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:border-2 focus:border-green focus:outline-none"
              placeholder="Your name"
            />
            <label htmlFor="email" className="font-inter text-sm text-white/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="font-inter -mt-4 rounded-lg border border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:border-2 focus:border-green focus:outline-none"
              placeholder="Your email"
            />
            <label
              htmlFor="message"
              className="font-inter text-sm text-white/80"
            >
              Message
            </label>
            <textarea
              rows={8}
              name="message"
              id="message"
              required
              className="font-inter -mt-4 resize-none rounded-lg border border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:border-2 focus:border-green focus:outline-none"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="flex w-full justify-center">
              <Button
                className="font-inter text-md flex w-full items-center justify-center gap-2 font-medium shadow-[0_2px_10px_1px] shadow-green/40"
                size="lg"
              >
                Send Message
                <Send className="text-white" size={20} />
              </Button>
            </button>
          </form>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
    </article>
  );
};

export default Contact;
