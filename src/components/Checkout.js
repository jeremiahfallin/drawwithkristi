import React, { useState } from "react";
import { Link } from "gatsby";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import styled from "styled-components";

const StyledCheckout = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const StyledCartButton = styled.button`
  background: #44c4e7;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 800;
  grid-column: 1 / 3;
  padding: 8px;
  text-shadow: 0.05em 0.05em #4f4f4f99, 0.05em -0.05em #4f4f4f99,
    -0.05em 0.05em #4f4f4f99, -0.05em -0.05em #4f4f4f99;
  text-transform: uppercase;
`;

export default function Cart() {
  const [status, setStatus] = useState("idle");
  const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("idle");
      const error = await redirectToCheckout();
      if (error) setStatus("redirect-error");
    } else {
      setStatus("missing-items");
    }
  }
  return (
    <StyledCheckout>
      {status === "missing-items" && (
        <p>
          Your cart is empty. Please go to the <Link to={"/"}>shop</Link> and
          add an item to the cart
        </p>
      )}
      {status === "redirect-error" && (
        <p>Unable to redirect to Stripe checkout page.</p>
      )}
      <div>
        Total: ({cartCount} items):
        <div>
          {formatCurrencyString({
            value: totalPrice,
            currency: "USD",
          })}
        </div>
      </div>
      <StyledCartButton onClick={handleClick}>Checkout</StyledCartButton>
    </StyledCheckout>
  );
}