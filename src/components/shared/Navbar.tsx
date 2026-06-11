import Logo from "../ui/Logo";
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
    <div className="sticky top-0 right-0 left-0 z-20 flex w-full items-center justify-between bg-transparent">
      <Logo />
      <MobileNavbar navLinks={navLinks} />
      <DesktopNavbar navLinks={navLinks} />
    </div>
  );
};

export default Navbar;
