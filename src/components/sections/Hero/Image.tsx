const Image = () => {
  return (
    <section className="relative mt-20 flex items-center justify-center min-[900px]:-mb-20 md:-mt-44 md:max-w-1/2 md:min-w-1/2 md:justify-end lg:-mb-44">
      <div className="relative max-w-113 min-[870px]:w-11/12 md:w-full">
        <img
          src={import.meta.env.BASE_URL + "main.png"}
          alt="abbas bayat true picture"
          className="rounded-xl border-5 border-[#1a2329]/30"
        />

        {/* EXP */}
        <div className="md:py-auto md:px-auto absolute -top-1/12 left-0 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-1 py-1 backdrop-blur-xs min-[500px]:-top-8 min-[500px]:-left-5 min-[870px]:top-0 md:-top-10 md:h-20 md:w-24">
          <p className="text-xs font-extralight tracking-wide text-white/60">
            <span className="text-green text-2xl font-bold md:text-3xl">
              2+
            </span>{" "}
            <br />
            Years Exp.
          </p>
        </div>

        {/* available */}
        <div className="md:px-auto md:py-auto absolute right-0 bottom-0 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-2 py-1 backdrop-blur-xs md:h-10 md:w-40">
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#01BE4C]" />
          <p className="text-xs text-white/90 md:text-xs">Available For Work</p>
        </div>
      </div>

      {/* animation */}
      <div className="shadow-green/30 absolute max-w-113 animate-pulse rounded-xl shadow-[0px_0px_10px_10px] min-[870px]:w-11/12 md:w-full">
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
