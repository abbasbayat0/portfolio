import { useState } from "react";

const Image = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "main.png";

  return (
    <section className="relative mt-20 flex items-center justify-center min-[900px]:-mb-20 lg:-mt-44 lg:-mb-44 lg:max-w-1/2 lg:min-w-1/2 lg:justify-end">
      <div className="relative max-w-113 min-[870px]:w-11/12 lg:w-full">
        {/* placeholder */}
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-[#1a2329]">
          <div
            className={`h-full w-full scale-110 bg-cover bg-center transition-all duration-700 ${imageLoaded ? "scale-100 opacity-0 blur-none" : "scale-110 opacity-100 blur-2xl"}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        </div>

        {/* main pic */}
        <img
          src={imageUrl}
          alt="abbas bayat true picture"
          className={`relative rounded-xl border-5 border-[#1a2329]/30 transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* EXP */}
        <div className="lg:py-auto lg:px-auto absolute -top-1/12 left-0 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-1 py-1 backdrop-blur-xs min-[500px]:-top-8 min-[500px]:-left-5 min-[870px]:top-0 lg:-top-10 lg:h-20 lg:w-24">
          <p className="text-xs font-extralight tracking-wide text-white/60">
            <span className="text-green text-2xl font-bold lg:text-3xl">
              2+
            </span>{" "}
            <br />
            Years Exp.
          </p>
        </div>

        {/* available */}
        <div className="lg:px-auto lg:py-auto absolute right-0 bottom-0 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-2 py-1 backdrop-blur-xs lg:h-10 lg:w-40">
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#01BE4C]" />
          <p className="text-xs text-white/90 lg:text-xs">Available For Work</p>
        </div>
      </div>

      {/* shadow */}
      <div
        className="shadow-green/30 absolute max-w-113 animate-pulse rounded-xl shadow-[0px_0px_10px_10px] transition-opacity duration-1000 min-[870px]:w-11/12 lg:w-full"
        style={{
          opacity: imageLoaded ? 1 : 0,
        }}
      >
        <img
          src={import.meta.env.BASE_URL + "main.png"}
          alt=""
          className="opacity-0"
        />
      </div>
    </section>
  );
};

export default Image;
