import About from "./About";
import Accordion from "./Accordion";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Service from "./Service";
import Team from "./Team";
// import Abouts from "./Abouts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Service />
      <Accordion />
      <Contact />
      <Team />
      <About />
      {/* <Abouts /> */}
      <Footer />
    </div>
  );
}

export default App;
