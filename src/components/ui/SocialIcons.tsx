const socials = [
  {
    alt: "mail icon",
    src: "icons/mail.png",
    href: "mailto:abbas0bayat@gmail.com",
  },
  {
    alt: "github icon",
    src: "icons/github.png",
    href: "https://github.com/abbasbayat0",
  },
  {
    alt: "telegram icon",
    src: "icons/telegram.png",
    href: "https://t.me/abbasbayat",
  },
];

const SocialIcons = () => {
  return (
    <>
      {socials.map((link) => {
        const { alt, src, href } = link;
        return (
          <a
            href={href}
            rel="noopener, noreferrer"
            key={alt}
            target="_blank"
            title={alt.slice(0, -4)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg ${alt.includes("mail") ? "sm:hidden" : ""}`}
          >
            <img src={src} alt={alt} className="h-5 w-5" />
          </a>
        );
      })}
    </>
  );
};

export default SocialIcons;
