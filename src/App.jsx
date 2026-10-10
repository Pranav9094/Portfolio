import { useTheme } from "./hooks/useTheme";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="bg-paper dark:bg-ink min-h-screen cursor-default">
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
