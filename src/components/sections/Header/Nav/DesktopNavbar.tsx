import Button from "../../../ui/Button";

const DesktopNavbar = ({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) => {
  return (
    <>
      <section className="hidden gap-4 rounded-full px-4 py-2 md:flex">
        {navLinks.map((link) => {
          return (
            <a
              href={link.href}
              key={link.label}
              className="flex items-center justify-center rounded-full px-3 py-1 text-sm tracking-wide text-gray-300/60 transition duration-300 hover:bg-[#1a2329]/40 hover:text-gray-300"
            >
              {link.label}
            </a>
          );
        })}
      </section>
      <section className="hidden md:block">
        <a href="#contact">
          <Button children="Contact Me" />
        </a>
      </section>
    </>
  );
};

export default DesktopNavbar;
