import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="blue-highlight">I am</span>
          </h4>
          <h1 className="blue-highlight">Tarek Mulla</h1>
          <h3>Professional Cloud Engineer, DevSecOps, Cybersecurity Enthusiast</h3>
          <p>
          Tarek is an experienced cloud engineer with over 9 years of cloud and software development experience. He specializes in DevOps, security best practices, and implementing cloud solutions.
          </p>
          <p>
          He is currently pursuing a Master's degree in Cybersecurity at RMIT University to enhance his knowledge and skills in the security field.
          </p>
          <p>
          Tarek is known for his ability to effectively collaborate with cross-functional teams and communicate complex technical concepts to both technical and non-technical stakeholders. He stays up to date with the latest industry trends and continuously enhances his skills through ongoing professional development and certifications.
          </p>
          <Social>
            <p>Check my profiles</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/tarekmulla">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/tarek_mulla">
                  <AiOutlineTwitter />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/tarekmulla/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://mulla.au/images/tarek-mulla.jpg"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  width: 90%;
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #035bff;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #035bff;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 20rem;
    filter: drop-shadow(0px 10px 10px #035bff);
    transition: transform 400ms ease-in-out;
    @media (max-width: 840px) {
      width: 14rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
