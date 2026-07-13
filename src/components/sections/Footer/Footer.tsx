import SocialIcons from "../../ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="mt-32 flex flex-col items-center justify-center gap-3 pb-10">
      <article className="h-0.5 w-full bg-gray-800/60" />
      <article className="mt-5 flex items-center gap-3">
        <SocialIcons />
      </article>
      <article>
        <p className="text-sm tracking-wide text-white/50">
          © 2026 <span className="text-green">ABBAS BAYAT</span>. All rights
          reserved.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
