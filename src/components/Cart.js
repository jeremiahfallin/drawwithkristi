import React from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import styled from "styled-components";

const StyledCart = styled.section`
  margin-top: 24px;
  display: grid;
  grid-auto-rows: 148px;
  gap: 16px;
  grid-auto-flow: row;

  @media only screen and (max-width: 600px) {
    padding-left: 10px;
  }
`;

const StyledCheckoutPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 25px;
`;

const StyledCheckout = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  grid-row-gap: 30px;
  width: 100%;
  height: 100vh;
  align-items: center;
  li a {
    color: #ff74ab;
  }

  @media only screen and (max-width: 900px) {
    padding-left: 10px;
  }
`;

const Cart = () => {
  return (
    <StyledCheckoutPage>
      <StyledCart>
        <CartItems />
      </StyledCart>
      <StyledCheckout>
        <div />
        <Checkout />
      </StyledCheckout>
    </StyledCheckoutPage>
  );
};

export default Cart;
