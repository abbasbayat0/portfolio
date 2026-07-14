import { Quote } from "lucide-react";
import { motion } from "motion/react";

const ListItems = ({
  name,
  comment,
  position,
  photo,
}: {
  name: string;
  comment: string;
  position: string;
  photo: string;
}) => {
  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
      whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "backIn" }}
      className="shadow-green/10 relative w-full rounded-4xl bg-[#151F24] px-2 pt-16 pb-10 shadow-[0_0_8px_8px] sm:w-9/12 md:px-16"
    >
      <div className="bg-green absolute -top-5 left-10 flex h-12 w-12 items-center justify-center rounded-full">
        <Quote className="text-white" size={25} />
      </div>
      <div>
        <p className="text-lg text-white/80 md:text-xl md:tracking-wide">
          " {comment} "
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div>
          <img
            src={import.meta.env.BASE_URL + photo}
            alt={`${name} photo`}
            className="h-13 w-13 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-medium tracking-wide text-white">{name}</p>
          <p className="text-sm font-light tracking-wider text-white/40">
            {position}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ListItems;
