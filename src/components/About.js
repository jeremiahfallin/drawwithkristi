import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Instagram from "./Instagram";

const StyledAbout = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 0fr;
  grid-row-gap: 30px;
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 900px) {
    grid-column: span 2;
  }
`;

const StyledHeader = styled.div`
  font-size: 24px;
  align-self: end;
  justify-self: center;
`;

const StyledDescription = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    grid-row: span 2;
  }
`;

const StyledText = styled.div`
  @media only screen and (max-width: 500px) {
    width: 73%;
  }
`;

const StyledAboutImage = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
    justify-content: center;
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 900px) {
    float: right;
    padding-left: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
`;

const About = () => {
  return <Instagram />;
};

export default About;
