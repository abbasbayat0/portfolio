import { ChevronLeft, ChevronRight } from "lucide-react";

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
    </div>
  );
};

export default ListNavigation;
