import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <ContactContainer id="contact">
      <div>
        <h2>
          Contact<span>()</span>{" "}
        </h2>
        <p>
          You can reach out to me via{"  "}
          an email to
          <a href="mailto:wonho.jung92@gmail.com"> wonho.jung92@gmail.com</a>
        </p>
        <p> I&apos;ll get back to you as quickly as possible!</p>
      </div>
      <Icons>
        <a
          href="https://github.com/wonho-jung"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/samjung108/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </Icons>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  height: 100%;

  h2{
    display: flex;  
    justify-content: center;
  }
  h2 > span {
    color: #54b689;
  }
  p{
    text-align: center;
    line-height:1.5rem;
  }
  p > a {
        cursor: pointer;
        color: #54b689;
        opacity:0.7;
        :hover {
          opacity: 1;
        }
      }
    }
    @media (min-width: 641px) and (max-width: 1007px) {
      div {
      max-width: 600px;


  }
  }
  @media only screen and (min-width: 1008px) {
    div {
      max-width: 600px;


  }
`;

const Icons = styled.div`
  @media only screen and (max-width: 640px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .MuiSvgIcon-root {
      margin-right: 20px;
      color: #54b689;
      :hover {
        transition: transform 0.2s ease-in-out !important;
        transform: scale(1.2) !important;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }
  @media only screen and (min-width: 1008px) {
    display: none;
  }
`;
