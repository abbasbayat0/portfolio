import { useState } from "react";
import ListItems from "./ListItems";
import ListNavigation from "./ListNavigation";
import { comments } from "../../../../assets/data";

const List = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      {comments.map((each, index) => {
        const { name, position, comment, photo } = each;
        return (
          <div
            className={`${activeIndex !== index && "hidden"} mt-10 flex w-full flex-col items-center justify-center gap-10`}
            key={index + name}
          >
            <ListItems
              name={name}
              position={position}
              comment={comment}
              photo={photo}
            />
            <ListNavigation
              comments={comments}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        );
      })}
    </section>
  );
};

export default List;
