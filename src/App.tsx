/* eslint-disable react-hooks/purity */
import Navbar from "./components/layouts/Navbar";
import About from "./page/home/sections/About";
import Comments from "./page/home/sections/Comments";
import Contact from "./page/home/sections/Contact";
import Experience from "./page/home/sections/Experience";
import Hero from "./page/home/sections/Hero";
import Projects from "./page/home/sections/Projects";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <div>
        <img
          src="hero-bg.jpg"
          alt=""
          className="absolute top-0 left-1/2 min-h-screen min-w-5xl -translate-x-1/2"
        />
      </div>
      <div className="absolute min-h-screen min-w-screen bg-linear-to-b from-20% to-black to-80%"></div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map(() => (
          <div
            className="absolute h-1 w-1 rounded-full bg-[#20b2a6]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `dots ${20 + Math.random() * 20}s  ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <header className="w-screen max-w-350 overflow-x-hidden px-14 py-5">
        <Navbar />
      </header>
      <main className="mt-32 w-screen max-w-350 overflow-x-hidden px-14 py-5">
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
