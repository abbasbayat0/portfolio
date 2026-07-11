import About from "../components/sections/About/About";
import Comments from "../components/sections/Comments/Comments";
import Contact from "../components/sections/Contact/Contact";
import Experience from "../components/sections/Experience/Experience";
import Background from "../components/sections/Hero/Background";
import Hero from "../components/sections/Hero/Hero";
import Navbar from "../components/sections/Nav/Navbar";
import Projects from "../components/sections/Projects/Projects";

const Home = () => {
  return (
    <div
      id="main"
      className="relative min-h-screen w-screen overflow-hidden bg-[#0f1418]"
    >
      <header className="w-screen max-w-350 overflow-x-hidden px-14 py-5">
        <Navbar />
      </header>
      <main className="w-screen max-w-350 overflow-hidden px-7 py-5 xl:px-14">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Comments />
        <Contact />
      </main>
      <footer className="">
        <p className="text-white">hellowwwww from footer</p>
      </footer>
      <Background />
    </div>
  );
};

export default Home;
