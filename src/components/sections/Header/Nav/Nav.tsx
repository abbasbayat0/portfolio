import { navLinks } from "../../../../assets/data";
import DesktopNavbar from "./DesktopNavbar";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import { motion } from "motion/react";

const Nav = () => {
  return (
    <motion.nav
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "none", opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="fixed top-5 left-1/2 z-20 flex w-11/12 max-w-340 -translate-x-1/2 items-center justify-between rounded-full bg-gray-700/20 px-5 py-2 backdrop-blur-[6px]"
    >
      <Logo />
      <MobileNavbar navLinks={navLinks} />
      <DesktopNavbar navLinks={navLinks} />
    </motion.nav>
  );
};

export default Nav;
