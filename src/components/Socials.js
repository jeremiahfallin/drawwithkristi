import React from "react";
import styled from "styled-components";

import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import twitch from "../assets/twitch.svg";

const StyledSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <a href={"https://www.instagram.com/drawwithkristi"}>
        <img src={instagram} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
      <a href={"https://www.twitch.tv/queenkristi"}>
        <img src={twitch} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
      <a href={"https://twitter.com/drawwithkristi"}>
        <img src={twitter} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
    </StyledSocials>
  );
};

export default Socials;
