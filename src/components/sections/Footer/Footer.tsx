const Footer = () => {
  return (
    <footer className="mt-36 flex flex-col items-center justify-center gap-3 pb-10">
      <article className="h-0.5 w-full bg-gray-800/60" />
      <article className="mt-5 flex items-center gap-3">
        <a
          href="https://github.com/abbasbayat0"
          rel="noopener, noreferrer"
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
        >
          <img src="/github.png" alt="" className="h-5 w-5" />
        </a>
        <a
          href="https://t.me/abbasbayat"
          rel="noopener, noreferrer"
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
        >
          <img src="/telegram.png" alt="" className="h-5 w-5" />
        </a>
      </article>
      <article>
        <p className="text-sm tracking-wide text-white/40">
          © 2026 <span className="text-green">ABBAS BAYAT</span>. All rights
          reserved.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
