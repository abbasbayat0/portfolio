import Background from "./components/shared/Hero/Background";
import Navbar from "./components/shared/Nav/Navbar";
import About from "./page/home/About";
import Comments from "./page/home/Comments";
import Contact from "./page/home/Contact";
import Experience from "./page/home/Experience";
import Hero from "./page/home/Hero";
import Projects from "./page/home/Projects";

const App = () => {
  return (
    <div
      id="main"
      className="relative min-h-screen w-screen overflow-x-hidden bg-[#0f1418]"
    >
      <Background />
      <header className="w-screen max-w-350 overflow-x-hidden px-14 py-5">
        <Navbar />
      </header>
      <main className="absolute left-1/2 w-screen max-w-350 -translate-x-1/2 overflow-x-hidden overflow-y-hidden px-7 xl:px-14 py-5">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Comments />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
