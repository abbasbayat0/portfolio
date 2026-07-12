import { useState } from "react";
import ListItems from "./ListItems";
import ListNavigations from "./ListNavigations";

const comments = [
  {
    name: "Ali Rezaei",
    position: "Senior Frontend Developer",
    comment:
      "Abbas has a great eye for detail. His components are always reusable and well-documented. He follows best practices and writes clean, maintainable code. His problem-solving skills are impressive and he's a great team player.",
    photo: "person/ali.jpg",
  },
  {
    name: "Nima Mohammadi",
    position: "Product Owner",
    comment:
      "Abbas delivers features on time and communicates technical challenges clearly with the team. He's proactive in suggesting improvements and always thinks about the user experience. His reliability and professionalism make him a valuable asset to any project.",
    photo: "person/nima.jpg",
  },
  {
    name: "Sara Karimi",
    position: "UI/UX Designer",
    comment:
      "Abbas translates my designs into code exactly as intended. He truly respects the design system and pays attention to every pixel. He also provides valuable feedback on animations and micro-interactions that enhance the overall user experience.",
    photo: "person/sara.jpg",
  },
  {
    name: "Mahdi Ahmadi",
    position: "Backend Developer",
    comment:
      "Working with Abbas is smooth. He writes clean code and makes REST API integration easy. He understands the backend constraints and optimizes the frontend accordingly. His communication is clear and he's always ready to debug issues together.",
    photo: "person/mahdi.jpg",
  },
  {
    name: "Hossein Ghasemi",
    position: "Team Lead",
    comment:
      "Abbas is a reliable developer. He helps junior devs and always brings good solutions to the table. He takes ownership of his work and consistently delivers high-quality results. His positive attitude and mentorship make the team stronger.",
    photo: "person/hossein.jpg",
  },
];

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
            <ListNavigations
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
