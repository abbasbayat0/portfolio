import { Quote } from "lucide-react";

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
    <div className="relative w-full rounded-4xl bg-[#151F24] px-2 pt-16 pb-10 shadow-[0_0_8px_8px] shadow-[#20b2a6]/10 sm:w-9/12 md:px-16">
      <div className="absolute -top-5 left-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#20b2a6]">
        <Quote className="text-white" size={25} />
      </div>
      <div>
        <p className="font-inter text-lg text-white/90 md:text-2xl">
          " {comment} "
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div>
          <img
            src={photo}
            alt={`${name} photo`}
            className="h-13 w-13 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-inter text-lg font-medium tracking-wide text-white">
            {name}
          </p>
          <p className="font-inter text-sm font-light tracking-wider text-white/40">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
