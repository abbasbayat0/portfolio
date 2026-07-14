import { motion } from "motion/react";
import { useState } from "react";

const Image = () => {
  const imageUrl = "abbas bayat.png";
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.section
      initial={{ translateX: 20, opacity: 0, scale: 0.95 }}
      animate={{ translateX: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: "backIn" }}
      className="relative mt-20 flex items-center justify-center min-[900px]:-mb-20 lg:-mt-44 lg:-mb-44 lg:max-w-1/2 lg:min-w-1/2 lg:justify-end"
    >
      <div className="relative max-w-113 min-[870px]:w-11/12 lg:w-full">
        <img
          src={imageUrl}
          onLoad={() => setImageLoaded(true)}
          alt="abbas bayat true picture"
          className={`rounded-xl border-5 border-[#1a2329]/30`}
        />

        {/* EXP */}
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:2, ease:"backIn"}} className="lg:py-auto lg:px-auto absolute -top-1/12 -left-4 z-10 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-1 py-1 backdrop-blur-xs min-[500px]:-top-8 min-[500px]:-left-5 min-[870px]:-top-8 lg:-top-10 lg:-left-8 lg:h-20 lg:w-24">
          <p className="text-xs font-extralight tracking-wide text-white/60">
            <span className="text-green text-2xl font-bold lg:text-3xl">
              2+
            </span>{" "}
            <br />
            Years Exp.
          </p>
        </motion.div>

        {/* available */}
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:2, ease:"backIn"}} className="lg:px-auto lg:py-auto absolute -right-4 bottom-0 z-10 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-2 py-1 backdrop-blur-xs lg:-right-8 lg:-bottom-4 lg:h-10 lg:w-40">
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#01BE4C]" />
          <p className="text-xs text-white/90 lg:text-xs">Available For Work</p>
        </motion.div>
      </div>

      {/* shadow */}
      <div
        className={`shadow-green/30 absolute max-w-113 rounded-xl shadow-[0px_0px_10px_10px] transition duration-1000 min-[870px]:w-11/12 lg:w-full ${imageLoaded ? "animate-pulse bg-black/0 blur-none" : "animate-none bg-black blur-xs"}`}
      >
        <img
          src={import.meta.env.BASE_URL + "abbas bayat.png"}
          alt=""
          className="opacity-0"
        />
      </div>
    </motion.section>
  );
};

export default Image;
