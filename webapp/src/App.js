import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Experience />
      <LightColor>
        <Projects />
      </LightColor>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding-bottom: 5rem;
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
