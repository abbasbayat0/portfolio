import Header from "../components/sections/Header/Header";
import Main from "../components/sections/Main/Main";
import Footer from "../components/sections/Footer/Footer";
import Background from "../components/sections/Hero/Background";

const Home = () => {
  return (
    <div
      id="main"
      className="relative min-h-screen w-screen overflow-hidden bg-[#0f1418]"
    >
      <Header />
      <Main />
      <Footer />
      <Background />
    </div>
  );
};

export default Home;
