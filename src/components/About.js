import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AOS from "aos";
import "aos/dist/aos.css";
import mypic from "../assets/mypic.jpg";
function About() {
  AOS.init();
  return (
    <AboutContainer data-aos="fade-right" id="about">
      <h1>
        About Me <span>()</span>
      </h1>
      <AboutContent>
        <ContentLeft>
          <p>
            Hello! My name is Samuel (Wonho) Jung, and my passion lies within
            the frond-end development. I was introduced to web-development back
            in 2019 when I learned HTML5 & CSS3 in school, and my interest in
            front-end development never ceased since then.
          </p>
          <p>Here are a few tools that I've been working with recently:</p>
          <ul className>
            <li>
              <ArrowRightIcon fontSize="small" />
              JavaScript (ES6+)
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              React
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Redux
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Styled-components
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Firebase
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              HTML & CSS
            </li>
          </ul>
        </ContentLeft>
        <ContentRight>
          <img src={mypic} alt="" />
        </ContentRight>
      </AboutContent>
      <AboutImgMoboile>
        <img src={mypic} alt="" />
      </AboutImgMoboile>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  margin-bottom: 150px;
  height: 100%;
  ul {
    padding-top: 10px;

    display: grid;
    grid-template-columns: auto auto;
    li {
      font-size: 13px;
      display: flex;
      align-items: center;
      list-style: none;
      .MuiSvgIcon-root {
        color: #54b689;
      }
    }
  }
  h1 {
    span {
      color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    margin-bottom: 300px;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      position: absolute;
      top: -70px;
      left: 0;
    }
  }
`;
const AboutContent = styled.div`
  max-width: 900px;
  display: flex;
`;
const ContentLeft = styled.div`
  line-height: 1.5rem;
`;
const ContentRight = styled.div`
  img {
    width: 250px;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }
  @media only screen and (min-width: 1008px) {
    display: block;
  }
`;
const AboutImgMoboile = styled.div`
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 999px;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 999px;
  }
  @media only screen and (min-width: 1007px) {
    display: none;
  }

  img {
    border-radius: 999px;
    width: 250px;
  }
`;
