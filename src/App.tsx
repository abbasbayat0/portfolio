import Navbar from "./components/layouts/Navbar";
import About from "./page/home/sections/About";
import Comments from "./page/home/sections/Comments";
import Contact from "./page/home/sections/Contact";
import Experience from "./page/home/sections/Experience";
import Hero from "./page/home/sections/Hero";
import Projects from "./page/home/sections/Projects";

const App = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg- [#0f1418] px-14 py-5 max-w-350">
      <header>
        <Navbar />
      </header>
      <main className="mt-32">
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
