import { Send } from "lucide-react";

const Form = () => {
  return (
    <div className="border-green/40 w-full rounded-3xl border bg-[#151E23] px-5 py-8 lg:px-10 lg:py-12">
      <form
        action="https://formsubmit.co/abbas0bayat@gmail.com"
        method="POST"
        className="flex h-full w-full flex-col justify-between gap-6"
      >
        <label htmlFor="name" className="text-sm tracking-wide text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
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
          required
          className="focus:border-green -mt-4 resize-none rounded-lg border-2 border-gray-700/50 bg-[#1A2329] p-3 text-sm text-white/40 transition duration-300 focus:text-white focus:outline-none"
          placeholder="Your message"
        ></textarea>
        <button className="text-md shadow-green/40 bg-green/80 hover:bg-green flex w-full cursor-pointer justify-center gap-3 rounded-full px-7 py-4 font-medium text-white/80 shadow-[0_2px_10px_1px] transition duration-300 text-shadow-white/40 text-shadow-xs hover:text-white lg:mx-auto lg:w-10/12">
          Send Message
          <Send className="text-white" size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;
