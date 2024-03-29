import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function LeftSidebar() {
  return (
    <LeftSidebarContainer>
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
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;

const LeftSidebarContainer = styled.div`
  @media only screen and (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: block;
    position: sticky;
    top: 500px;
    height: fit-content;
    flex: 0.1;
    display: flex;
    justify-content: center;
    max-width: 150px;
  }
  @media only screen and (min-width: 1008px) {
    display: block;
    position: sticky;
    top: 600px;
    height: fit-content;
    flex: 0.1;
    display: flex;
    justify-content: center;
    max-width: 100px;
  }
`;

const Icons = styled.div`
  .MuiSvgIcon-root {
    color: #54b689;
    :hover {
      transition: transform 0.2s ease-in-out !important;
      transform: scale(1.2) !important;
    }
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: flex;
    flex-direction: column;
    .MuiSvgIcon-root {
      padding-bottom: 15px;
      font-size: 35px;
    }
  }
  @media only screen and (min-width: 1008px) {
    display: flex;
    flex-direction: column;
    .MuiSvgIcon-root {
      padding-bottom: 15px;
      font-size: 40px;
    }
  }
`;
