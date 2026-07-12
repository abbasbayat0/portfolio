import About from "./About/About";
import Comments from "./Comments/Comments";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

const Main = () => {
  return (
    <main className="mx-auto w-screen max-w-350 px-7 py-5 xl:px-14">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Comments />
      <Contact />
    </main>
  );
};

export default Main;
