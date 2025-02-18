import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import ScrollTop from "../assets/js/ScrollTop.js";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Values from "../components/Home/Values";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Pricing from "../components/Home/Pricing";
import Team from "../components/Home/Team";
import Contact from "../components/Home/Contact";
import "../assets/styles/Home/home.css";
import useScrollAndNav from "../assets/js/useScrollAndNav"; 


const Home = () => {
  // Use the custom hook
  useScrollAndNav();
  
  return (
    <div className="index-page home">

      <Header />
      <Hero />
      <About />
      <Values />
      <Features />
      <Services />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
