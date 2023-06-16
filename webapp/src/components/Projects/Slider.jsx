import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
      img : "https://live-production.wcms.abc-cdn.net.au/62ae817095a253ef721e3625fa1960ef?impolicy=wcms_crop_resize&cropH=1689&cropW=3000&xPos=0&yPos=42&width=862&height=485",
      disc : "Telstra Trade-in cloud backend, multi-accounts, multi-region cloud infrastructure backend.",
      link: "https://www.telstra.com.au/trade-in"
    },
    {
      img : "https://digitalhealth.org.au/wp-content/uploads//2020/02/ehealthNSW-logo-255x200.png",
      disc : "Helping the Cloud platform team at eHealth NSW with the Cloud Security Essential 8 (E8) compliance initiative.",
      link: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight"
    },
    {
        img : "https://i0.wp.com/alphaedgeinvesting.com/wp-content/uploads/2022/07/Trading.jpeg?w=1950&ssl=1",
        disc: "Migrating, automating and supporting Content delivery applications in Iress",
        link: "https://www.iress.com/software/trading-and-market-data/market-data/"
    },
    {
        img : "https://repository-images.githubusercontent.com/337150944/a51e8900-6aec-11eb-8c14-9119664dccda",
        disc: "Personal porfolio, serverless, hosted in AWS, fully automated and follows DevSecOps practices.",
        link: "https://github.com/tarekmulla/mulla-website"
    },
    {
      img : "https://globalcompactrefugees.org/sites/default/files/styles/landscape_08/public/GP-Talent%20Beyond%20Boundaries_Talent%20Catalog_global_0.webp?h=7cdec6eb&itok=c130s8FZ",
      disc : "Volunteered with Talent Beyond Boundaries to migrate their java app to AWS cloud using Terraform",
      link: "https://github.com/talentbeyondboundaries/tbbtalentv2"
    },
    {
      img : "https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/rmit-sgs-campus-facilities/2019-campus-photos/sgs-campus-night-03.jpg",
      disc : "Webapp to demonstrate the material of Course MATH2415 - Discrete Mathematics in RMIT Uni",
      link: "https://github.com/tarekmulla/discrete-math"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #035bff;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
    color: #035bff;
    background-color: white;
  }
  .next{
    color: #035bff;
    background-color: white;
  }
`
