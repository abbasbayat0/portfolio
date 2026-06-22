import List from "../../components/Comments/List";
import Title from "../../components/Comments/Title";

const Comments = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col items-center justify-center">
      <Title />
      <List />
    </article>
  );
};

export default Comments;
