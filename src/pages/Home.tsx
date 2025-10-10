import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Products from "../components/Home/Products";
import Services from "../components/Home/Services";
import Activities from "../components/Home/Activities";
import CTA from "../components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Activities />
      <CTA />
    </>
  );
}
