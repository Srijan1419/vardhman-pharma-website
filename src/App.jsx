import Header from "./components/Header";
import Hero from "./components/Hero";
import ManifestStrip from "./components/ManifestStrip";
import About from "./components/About";
import Signal from "./components/Signal";
import WhatWeStock from "./components/WhatWeStock";
import BrandsWeCarry from "./components/BrandsWeCarry";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ManifestStrip />
        <About />
        <Signal />
        <WhatWeStock />
        <BrandsWeCarry />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
