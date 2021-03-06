import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Socials from "./Socials";
import DWKLogo from "../images/logo.png";

const StyledSidebar = styled.div`
  display: grid;

  @media only screen and (min-width: 600px) {
    position: fixed;
    grid-template-rows: 1fr 2fr 2fr;
    /* grid-template-columns: 3fr 2fr; */
    grid-row-gap: 30px;
    height: 100vh;
  }
  li a {
    color: #ff74ab50;
  }

  @media only screen and (max-width: 900px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledSidebarTitle = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  @media only screen and (min-width: 600px) {
    /* grid-column: -2/-1; */
    font-size: 32px;
    align-self: end;
  }
`;

const StyledSidebarLinks = styled.div`
  @media only screen and (min-width: 600px) {
    /* grid-column: -2 / -1; */
    grid-template-rows: repeat(3, 1fr);
    align-self: center;
  }
`;

const StyledSidebarSocials = styled.div`
  @media only screen and (min-width: 600px) {
    /* grid-column: -2/-1; */
  }
`;

const StyledLogo = styled.img`
  height: 200px;
  width: auto;
  border-radius: 50px;
`;

const StyledSidebarLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  float: left;
  margin-left: 0;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Sidebar = ({ data }) => {
  return (
    <StyledSidebar>
      <StyledSidebarTitle>
        <Link to="/" style={{ color: "#000000" }}>
          <StyledLogo src={DWKLogo} alt="Draw With Kristi logo" />
        </Link>
      </StyledSidebarTitle>
      <StyledSidebarLinks>
        <StyledSidebarLinksList>
          <li>
            <Link to="/" activeStyle={{ color: "#ff74ab" }}>
              Store
            </Link>
          </li>
          <li>
            <Link to="/instagram" activeStyle={{ color: "#ff74ab" }}>
              IG Feed
            </Link>
          </li>
          <li>
            <Link to="/cart" activeStyle={{ color: "#ff74ab" }}>
              Cart
            </Link>
          </li>
        </StyledSidebarLinksList>
      </StyledSidebarLinks>
      <StyledSidebarSocials>
        <Socials />
      </StyledSidebarSocials>
    </StyledSidebar>
  );
};

export default Sidebar;
