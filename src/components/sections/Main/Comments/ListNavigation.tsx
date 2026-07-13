import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const ListNavigation = ({
  comments,
  activeIndex,
  setActiveIndex,
}: {
  comments: {
    name: string;
    comment: string;
    position: string;
    photo: string;
  }[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex items-center justify-center gap-5">
      {/* chevron */}
      <motion.div
        initial={{ translateX: -200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn", delay: 0.25 }}
        className="hover:bg-green/30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[#152024] transition duration-300"
        onClick={() => {
          if (activeIndex === 0) {
            setActiveIndex(comments.length - 1);
          } else setActiveIndex(activeIndex - 1);
        }}
      >
        <ChevronLeft className="text-white" size={25} />
      </motion.div>
      {/* dots */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex gap-2"
      >
        {[...Array(comments.length)].map((comment, index) => {
          return (
            <div
              key={comment}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`h-2 cursor-pointer rounded-full transition duration-300 ${index === activeIndex ? "bg-green w-10" : "w-2 bg-gray-700 hover:bg-gray-600"}`}
            ></div>
          );
        })}
      </motion.div>
      {/* chevron */}
      <motion.div
        initial={{ opacity: 0, translateX: 200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn", delay: 0.25 }}
        className="hover:bg-green/30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[#152024] transition duration-300"
        onClick={() => {
          if (activeIndex === comments.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
        }}
      >
        <ChevronRight className="text-white" size={25} />
      </motion.div>
    </div>
  );
};

export default ListNavigation;
