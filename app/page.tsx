import Hero from './components/Hero';
import Services from './components/Services';
import WhyVedixx from './components/WhyVedixx';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import { JsonLd } from './components/JsonLd';
import { websiteSchema } from './lib/schema';

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <main>
        <Hero />
        <Services />
        <WhyVedixx />
        <Testimonials />
        <Process />
        <About />
        <CtaBanner />
        <Contact />
      </main>
    </>
  );
}
