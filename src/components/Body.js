import React from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Worked from "./Worked";

// Linkcolor #54b689 or 00adb5
// font color #393E46 ,eeeeee
function Body() {
  return (
    <BodyContainer>
      <Home />

      <About />
      <Worked />

      <Project />
      <Contact />
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  height: 100%;
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-weight: 700;
  }
  h3 {
    color: #54b689;
  }
  p {
    font-size: 1em;
  }
  @media only screen and (max-width: 640px) {
    flex: 1;
    justify-content: center;
    padding: 0 30px;
    margin: 0;
    h1 {
      margin-bottom: 20px;
      font-size: 1.5em;
      line-height: 1.125em;
    }
    h2 {
      font-size: 1.25em;
    }
    h3 {
      font-size: 1.025em;
    }
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    flex: 0.8;
    justify-content: center;
    padding: 0 10px;
    margin: 0;
    h1 {
      font-size: 2em;
      line-height: 1.2em;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 1008px) and (max-width: 1300px) {
    max-width: 1200px;

    flex: 0.8;
    justify-content: center;
    padding: 0 50px;
    margin: 0;
    h1 {
      font-size: 3em;
      line-height: 1.5em;
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 1301px) {
    max-width: 1200px;

    flex: 0.8;
    justify-content: center;
    padding: 0 100px;
    margin: 0 100px;
    h1 {
      font-size: 3em;
      line-height: 1.5em;
      margin-bottom: 20px;
    }
  }
`;
