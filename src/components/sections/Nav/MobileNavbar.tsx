import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

const MobileNavbar = ({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) => {
  const [isMobileNavOpen, setMobileNavStatus] = useState(false);
  return (
    <>
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
            className="absolute top-14 left-1/2 w-full -translate-x-1/2 overflow-hidden rounded-xl bg-[#172026]/90 px-10 pt-1 pb-5 transition duration-300 md:hidden"
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
      <section
        className="cursor-pointer md:hidden"
        onClick={() => {
          setMobileNavStatus(!isMobileNavOpen);
        }}
      >
        {isMobileNavOpen ? <X color="white" /> : <Menu color="white" />}
      </section>
    </>
  );
};

export default MobileNavbar;
