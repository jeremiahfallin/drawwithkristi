import React, { useState } from "react";
import { Link } from "gatsby";
import { loadStripe } from "@stripe/stripe-js";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import styled from "styled-components";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

const StyledCheckout = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const StyledCheckoutButton = styled.button`
  background: #dce6ff;
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
  const { cartDetails, cartCount, totalPrice } = useShoppingCart();

  // async function handleClick(event) {
  //   event.preventDefault();
  //   if (cartCount > 0) {
  //     setStatus("idle");
  //     const error = await redirectToCheckout();
  //     if (error) setStatus("redirect-error");
  //   } else {
  //     setStatus("missing-items");
  //   }
  // }

  const handleClick = async event => {
    event.preventDefault();

    const data = {};
    for (let sku in cartDetails) {
      data[sku] = cartDetails[sku].quantity;
    }

    const response = await fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json());

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (error) {
      console.error(error);
    }
  };

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
      <StyledCheckoutButton onClick={handleClick}>Checkout</StyledCheckoutButton>
    </StyledCheckout>
  );
}
