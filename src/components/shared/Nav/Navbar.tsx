import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-20 flex w-11/12 items-center justify-between bg-gray-700/20 backdrop-blur-[2px] py-2 px-5 rounded-full">
      <Logo />
      <MobileNavbar navLinks={navLinks} />
      <DesktopNavbar navLinks={navLinks} />
    </div>
  );
};

export default Navbar;
