/* eslint-disable react-hooks/purity */

const Background = () => {
  return (
    <>
      <div>
        {/* background image */}
        <img
          src="hero-bg.jpg"
          alt=""
          className="absolute top-0 left-1/2 min-h-screen min-w-5xl -translate-x-1/2"
        />
      </div>

      {/* background shadow */}
      <div className="absolute min-h-[120%] min-w-screen bg-linear-to-b from-20% to-[#0f1418] to-80%"></div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map(() => (
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-[#20b2a6] opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `dots ${20 + Math.random() * 20}s  ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
