import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Team from "./Team";
import Clients from "./Clients";
import Accordion from "./Accordion";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <Service />
      <Team />
      <Clients />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
