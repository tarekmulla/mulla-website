import NavBar from "./components/navBar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import SEO from "./data/seo";
import { Helmet } from "react-helmet";

import "./App.css";

function App() {
  return (
    <div className="page-content">
      <div className="content-wrapper">
        <Helmet>
          <meta name="description" content={SEO.description} />
          <meta name="keywords" content={SEO.keywords.join(", ")} />
        </Helmet>

        <NavBar />

        <About />
        {/* <Projects /> IGNORE */}
        <Contact />

        <Footer />
        </div>
    </div>
  );
}

export default App;
