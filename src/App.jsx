import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;