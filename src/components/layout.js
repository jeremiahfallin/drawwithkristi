import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

import Sidebar from "./Sidebar";
import "./layout.css";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

const StyledLayout = styled.div`
  display: grid;
  font-family: Merriweather, sans-serif;
  /* overflow: hidden; */
  height: 100vh;
  width: 100vw;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    width: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) {
    grid-template-columns: 4fr 9fr;
    grid-column-gap: 50px;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const StyledBody = styled.main`
  display: grid;
  height: 100%;
  justify-items: center;
  width: 100%;

  @media only screen and (min-width: 600px) {
    overflow-y: scroll;
    grid-template-columns: 2fr 1fr;
  }
`;

const Layout = ({ children }) => {
  return (
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl="https://drawwithkristi.netlify.app/"
      cancelUrl="https://drawwithkristi.netlify.app/404"
      currency="USD"
      billingAddressCollection={true}
      allowedCountries={["US", "GB", "CA"]}
    >
      <StyledLayout>
        <Sidebar />
        <StyledBody>{children}</StyledBody>
      </StyledLayout>
    </CartProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
