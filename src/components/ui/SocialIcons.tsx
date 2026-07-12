const SocialIcons = () => {
  return (
    <>
      <a
        href="https://github.com/abbasbayat0"
        rel="noopener, noreferrer"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
      >
        <img
          src={import.meta.env.BASE_URL + "github.png"}
          alt=""
          className="h-5 w-5"
        />
      </a>
      <a
        href="https://t.me/abbasbayat"
        rel="noopener, noreferrer"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
      >
        <img
          src={import.meta.env.BASE_URL + "telegram.png"}
          alt=""
          className="h-5 w-5"
        />
      </a>
    </>
  );
};

export default SocialIcons;
