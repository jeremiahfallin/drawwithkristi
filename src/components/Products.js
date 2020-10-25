import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import inventory from "../functions/data/products.json";
import {
  InventoryContainer,
  StyledSection,
  StyledPaymentForm,
  StyledProductButton,
  StyledProductDescription,
  StyledProductImage,
  StyledProductPrice,
  StyledProductQuantity,
  StyledProductTitle,
  StyledQuantityLabel,
} from "./styles";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

const Products = () => {
  const { addItem } = useShoppingCart();

  const handleSubmit = async (event, product) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = {
      sku: form.get("sku"),
      quantity: Number(form.get("quantity")),
    };

    addItem(product, quantity);
  };

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const form = new FormData(event.target);

  //   const data = {
  //     sku: form.get("sku"),
  //     quantity: Number(form.get("quantity")),
  //   };

  //   // TODO send to serverless function
  //   const response = await fetch("/.netlify/functions/create-checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then(res => res.json());

  //   // TODO get the session ID and redirect to checkout
  //   const stripe = await stripePromise;

  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: response.sessionId,
  //   });

  //   if (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <StyledSection>
      {inventory.map(product => (
        <InventoryContainer key={product.sku}>
          <div>
            <StyledProductImage src={product.image} alt={product.name} />
            <StyledProductTitle>{product.name}</StyledProductTitle>
          </div>
          <div>
            <StyledProductDescription>
              {product.description}
            </StyledProductDescription>

            <StyledPaymentForm onSubmit={e => handleSubmit(e, product)}>
              <StyledProductPrice>
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })}
              </StyledProductPrice>
              <StyledQuantityLabel htmlFor="quantity">
                Quantity
              </StyledQuantityLabel>
              <StyledProductQuantity
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={1}
                min="1"
                max="10"
              />
              <input type="hidden" name="sku" value={product.sku} />
              <StyledProductButton
                aria-label={`Add ${product.name} to your cart`}
              >
                Add to Cart
              </StyledProductButton>
            </StyledPaymentForm>
          </div>
        </InventoryContainer>
      ))}
    </StyledSection>
  );
};

export default Products;
