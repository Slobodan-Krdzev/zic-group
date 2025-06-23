import Contact from "./Components/Home/Contact/Contact";
import Hero from "./Components/Home/Hero";
import OurWork from "./Components/Home/OurWork/OurWork";
import WhatWeDoSection from "./Components/Home/WhatWeDo/WhatWeDoSection";
import WorkProcessSection from "./Components/Home/WorkProcess/WorkProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services"><WhatWeDoSection /></section>
      
      <OurWork />
      <WorkProcessSection />
      <Contact />
    </>
  );
}
