import DesktopNavbar from "./DesktopNavbar";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Nav = () => {
  return (
    <nav className="fixed top-5 left-1/2 z-20 flex w-11/12 max-w-340 -translate-x-1/2 items-center justify-between rounded-full bg-gray-700/20 px-5 py-2 backdrop-blur-[6px]">
      <Logo />
      <MobileNavbar navLinks={navLinks} />
      <DesktopNavbar navLinks={navLinks} />
    </nav>
  );
};

export default Nav;
