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
    <motion.div
      initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
      whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "backIn" }}
      className="flex items-center justify-center gap-5"
    >
      {/* chevron */}
      <div
        className="hover:bg-green/30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[#152024] transition duration-300"
        onClick={() => {
          if (activeIndex === 0) {
            setActiveIndex(comments.length - 1);
          } else setActiveIndex(activeIndex - 1);
        }}
      >
        <ChevronLeft className="text-white" size={25} />
      </div>
      {/* dots */}
      <div className="flex gap-2">
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
      </div>
      {/* chevron */}
      <div
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
      </div>
    </motion.div>
  );
};

export default ListNavigation;
