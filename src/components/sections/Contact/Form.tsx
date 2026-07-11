import { Send } from "lucide-react";
import Button from "../../ui/Button";

const Form = () => {
  return (
    <div className="border-green/40 w-full rounded-3xl border bg-[#151E23] px-5 py-8 lg:px-10 lg:py-12">
      <form
        action=""
        className="flex h-full w-full flex-col justify-between gap-6"
      >
        <label
          htmlFor="name"
          className="font-inter text-sm tracking-wide text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="font-inter focus:border-green focus:text-white -mt-4 rounded-lg border-2 border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:outline-none"
          placeholder="Your name"
        />
        <label
          htmlFor="email"
          className="font-inter text-sm tracking-wide text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="font-inter focus:border-green focus:text-white -mt-4 rounded-lg border-2 border-gray-800 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:outline-none"
          placeholder="Your email"
        />
        <label
          htmlFor="message"
          className="font-inter text-sm tracking-wide text-white"
        >
          Message
        </label>
        <textarea
          rows={8}
          name="message"
          id="message"
          required
          className="font-inter focus:border-green focus:text-white -mt-4 resize-none rounded-lg border-2 border-gray-700/50 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:outline-none"
          placeholder="Your message"
        ></textarea>
        <button type="submit" className="flex w-full justify-center lg:px-5">
          <Button
            className="font-inter text-md shadow-green/40 flex w-full items-center justify-center gap-2 font-medium shadow-[0_2px_10px_1px] text-shadow-white/70 text-shadow-xs"
            size="lg"
          >
            Send Message
            <Send className="text-white" size={20} />
          </Button>
        </button>
      </form>
    </div>
  );
};

export default Form;
