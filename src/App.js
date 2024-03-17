import About from "./About";
import Accordion from "./Accordion";
import "./App.css";
import Clients from "./Clients";
import Client from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Index from "./Header";
import Navbar from "./Navbar";
import Service from "./Service";
import Team from "./Team";
// import Abouts from "./Abouts";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Index /> */}
      <Carousel />
      <Service />
      <Accordion />
      <Team />
      <Contact />
      <Clients />
      <About />
      {/* <Abouts /> */}
      <Footer />
    </div>
  );
}

export default App;
