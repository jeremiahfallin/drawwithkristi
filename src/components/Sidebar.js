import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Socials from "./Socials";

const StyledSidebar = styled.div`
  display: grid;
  width: 100%;
  @media only screen and (min-width: 600px) {
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-columns: 3fr 2fr;
    grid-row-gap: 30px;
    height: 100vh;
  }
  li a {
    color: #ff74ab;
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
  @media only screen and (min-width: 600px) {
    grid-column: -2/-1;
    font-size: 32px;
    align-self: end;
  }
`;

const StyledSidebarLinks = styled.div`
  @media only screen and (min-width: 600px) {
    grid-column: -2 / -1;
    grid-template-rows: repeat(3, 1fr);
    align-self: center;
  }
`;

const StyledSidebarSocials = styled.div`
  @media only screen and (min-width: 600px) {
    grid-column: -2/-1;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarTitle>
        <Link to="/" style={{ color: "#000000" }}>
          <strong>draw with kristi</strong>
        </Link>
      </StyledSidebarTitle>
      <StyledSidebarLinks>
        <ul
          style={{
            padding: 0,
            listStyleType: "none",
            float: "left",
            marginLeft: 0,
          }}
        >
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </StyledSidebarLinks>
      <StyledSidebarSocials>
        <Socials />
      </StyledSidebarSocials>
    </StyledSidebar>
  );
};

export default Sidebar;
