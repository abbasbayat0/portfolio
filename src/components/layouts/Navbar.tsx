import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// import MobileNav from "../ui/MobileNav";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavStatus] = useState(false);
  return (
    <div className="sticky top-0 right-0 left-0 flex w-full items-center justify-between bg-transparent z-20">
      {/* logo */}
      <section>
        <a
          href="/"
          className="font-[<Inter>] text-2xl font-semibold tracking-[-1px] text-white transition duration-300 hover:text-[#20b2a6]"
        >
          AB<span className="text-[#20b2a6]">.</span>
        </a>
      </section>
      {/* mobile navbar icon */}
      <section
        className="cursor-pointer md:hidden"
        onClick={() => {
          setMobileNavStatus(!isMobileNavOpen);
        }}
      >
        {isMobileNavOpen ? <X /> : <Menu />}
      </section>

      {/* mobile navbar */}
      <AnimatePresence>
        {isMobileNavOpen ? (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 1 },
            }}
            exit={{ height: 0, opacity: 0, transition: { duration: 1 } }}
            className="absolute top-10 w-full overflow-hidden rounded-md bg-gray-500/90 px-10 pt-1 pb-5 backdrop-blur-[2px] transition duration-300 md:hidden"
          >
            <div>
              {navLinks.map((link) => {
                return (
                  <a
                    href={link.href}
                    key={link.label}
                    className="font-inter mt-3 flex justify-center rounded-full py-1 tracking-wide text-white/70"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <Button children="Contact Me" className="mt-5 w-full" size="lg" />
          </motion.section>
        ) : null}
      </AnimatePresence>
      {/* desktop navbar */}
      <section className="hidden gap-4 rounded-full border-[#1a2329]/90 bg-[#1a2329]/80 px-4 py-2 shadow-lg/20 shadow-[#1a2329] backdrop-blur-lg md:flex">
        {navLinks.map((link) => {
          return (
            <a
              href={link.href}
              key={link.label}
              className="font-inter flex items-center justify-center rounded-full px-3 py-1 text-sm tracking-wide text-gray-300/60 transition duration-300 hover:bg-[#1a2329]/20 hover:text-gray-300"
            >
              {link.label}
            </a>
          );
        })}
      </section>

      {/* desktop button */}
      <section className="hidden md:block">
        <Button children="Contact Me" />
      </section>
    </div>
  );
};

export default Navbar;
