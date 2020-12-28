import React from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import styled from "styled-components";

import { StyledCartSection } from "./styles";

const StyledCart = styled.section`
  margin-top: 24px;
  display: grid;
  grid-auto-rows: auto;
  gap: 16px;
  grid-auto-flow: row;
  width: 100%;
  min-height: 0;
  min-width: 0;

  @media only screen and (max-width: 600px) {
    padding-left: 10px;
  }
`;

const Cart = () => {
  return (
    <StyledCart>
      <StyledCartSection>
        <CartItems />
      </StyledCartSection>
      <Checkout />
    </StyledCart>
  );
};

export default Cart;
