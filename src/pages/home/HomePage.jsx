import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";
import Quote from "../../components/quote/Quote";
import "./home-page.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <section id="hero" className="hero-section">
        <Hero />
      </section>
      <section>
        <Quote />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="pricing" className="pricing-section">
        <Pricing />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </div>
  );
}
