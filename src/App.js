import About from "./About";
import Accordion from "./Accordion";

import Clients from "./Clients";

import Contact from "./Contact";
import Footer from "./Footer";

import Navbar from "./Navbar";
import Service from "./Service";
import Team from "./Team";

import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />
      <Service />
      <Accordion />
      <Team />
      <Contact />
      <Clients />
      <About />

      <Footer />
    </div>
  );
}

export default App;
