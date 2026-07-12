/* eslint-disable react-hooks/purity */

const Background = () => {
  return (
    <>
      <div className="absolute inset-0 h-screen overflow-hidden">
        {/* background image */}
        <img
          src="hero-bg.jpg"
          alt="hero background"
          className="mx-auto w-5xl min-w-5xl xl:min-w-screen"
        />
      </div>

      {/* background shadow */}
      <div className="absolute inset-0 h-screen min-w-screen bg-linear-to-b from-20% to-[#0f1418] to-80%"></div>

      {/* green dots */}
      {[...Array(100)].map(() => (
        <div
          className="bg-green absolute z-0 h-1.5 w-1.5 rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `dots ${20 + Math.random() * 20}s  ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
};

export default Background;
