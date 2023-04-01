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
            disc={`Design, implement, and secure multi-account, multi-region cloud solutions using different Infrastructure as a Code (fully automated, high available and scalable)`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgInfinity}
            title={"DevSecOps Practices"}
            disc={`Setup and effectively use continuous integration and delivery tooling and processes to deliver software following DevOps and security best practices`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdSecurity}
            title={"Cybersecurity"}
            disc={`Implement security controls, and make sure the cloud environment is secure and follows best practices (Access control, Incident management, Data protection, ...)`}
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
