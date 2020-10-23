import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Socials from "./Socials";

const StyledSidebar = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-columns: 3fr 2fr;
  grid-row-gap: 30px;
  width: 100%;
  height: 100vh;
  li a {
    color: #ff74ab;
  }

  @media only screen and (max-width: 900px) {
    padding-left: 10px;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div
        style={{
          gridColumn: "-2/-1",
          fontSize: "32px",
          alignSelf: "end",
        }}
      >
        <Link to="/" style={{ color: "#000000" }}>
          <strong>draw with kristi</strong>
        </Link>
      </div>
      <div
        style={{
          gridColumn: "-2/-1",
          gridTemplateRows: "repeat(3, 1fr)",
          alignSelf: "center",
        }}
      >
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
      </div>
      <div style={{ gridColumn: "-2/-1" }}>
        <Socials />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
