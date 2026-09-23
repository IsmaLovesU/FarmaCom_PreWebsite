import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ResultsPreview from "../components/ResultsPreview";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <ResultsPreview />
      <Services />
      <About />
      <HowItWorks />
      <Contact />
    </main>
  );
}
