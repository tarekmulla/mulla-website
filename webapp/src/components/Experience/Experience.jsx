import React from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { CgInfinity } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Experience = () => {
  return (
    <Container id="experience">
      <Slide direction="down">
        <h4>
          My <span className="blue-highlight">Experience</span>
        </h4>
        <h1>Most of what I have experience with</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={AiOutlineCloudServer}
            title={"Cloud Architecture"}
            disc={`Design, deploy, and secure cloud solutions (AWS, and Azure) utilizing diverse Infrastructure as Code (IaC) languages.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgInfinity}
            title={"DevSecOps Practices"}
            disc={`Setup and proficiently leverage continuous integration and delivery (CI/CD) tools to deliver software in adherence to industry-leading DevOps and security principles.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdSecurity}
            title={"Cybersecurity"}
            disc={`Enforce robust security controls to ensure a fortified and compliant cloud environment adhering to best practices.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
