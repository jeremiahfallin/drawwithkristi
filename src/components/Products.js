import React from "react";
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

const Products = () => {
  const { addItem, cartItems } = useShoppingCart();

  const handleSubmit = async (event, product) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = {
      sku: form.get("sku"),
      quantity: Number(form.get("quantity")),
    };

    console.log(cartItems);
    console.log(product);
    addItem(product);
  };

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
            <StyledProductPrice>
              {formatCurrencyString({
                value: product.amount,
                currency: product.currency,
                language: navigator.language,
              })}
            </StyledProductPrice>
            <StyledPaymentForm onSubmit={e => handleSubmit(e, product)}>
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
