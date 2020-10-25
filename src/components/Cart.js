import React from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import styled from "styled-components";

const StyledCart = styled.section`
  margin-top: 24px;
  display: grid;
  grid-auto-rows: auto;
  gap: 16px;

  @media (min-width: 500px) {
    gap: 16px;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
  }

  /* @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const StyledCheckoutPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 50px;
  grid-column: span 2;

  @media (min-width: 360px) {
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
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
  const { cartDetails, cartCount, totalPrice } = useShoppingCart();
  console.log(cartDetails);

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
