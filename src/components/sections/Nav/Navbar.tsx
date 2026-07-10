import DesktopNavbar from "./DesktopNavbar";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <article className="fixed left-1/2 -translate-x-1/2 z-20 flex w-11/12 items-center max-w-340 justify-between bg-gray-700/20 backdrop-blur-[6px] py-2 px-5 rounded-full">
      <Logo />
      <MobileNavbar navLinks={navLinks} />
      <DesktopNavbar navLinks={navLinks} />
    </article>
  );
};

export default Navbar;
