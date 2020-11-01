import React from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import {
  StyledCartItemContainer,
  StyledCartBody,
  StyledCartImage,
  StyledCartTitle,
  StyledCartPrice,
  StyledCartButton,
  StyledCartQuantity,
  StyledCartItemQuantityContainer,
} from "./styles";

export default function CartItems() {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart();

  const options = [];
  for (let quantity = 1; quantity <= 10; ++quantity)
    options.push(
      <option key={quantity} value={quantity}>
        Qty: {quantity}
      </option>
    );

  const cart = [];
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku];
    cart.push(
      <StyledCartItemContainer key={cartEntry.sku}>
        <StyledCartTitle>{cartEntry.name}</StyledCartTitle>
        <StyledCartBody>
          <StyledCartImage src={cartEntry.image} alt={cartEntry.name} />
          <StyledCartItemQuantityContainer>
            <StyledCartQuantity
              id="quantity-select"
              defaultValue={cartEntry.quantity}
              onChange={event => {
                setItemQuantity(sku, event.target.value);
              }}
            >
              {options}
            </StyledCartQuantity>
            <StyledCartPrice>
              {formatCurrencyString({
                value: cartEntry.price,
                currency: cartEntry.currency,
              })}
            </StyledCartPrice>
            <StyledCartButton
              onClick={() => removeItem(cartEntry.sku)}
              aria-label={`Remove all ${cartEntry.name} from your cart`}
            >
              Remove
            </StyledCartButton>
          </StyledCartItemQuantityContainer>
        </StyledCartBody>
      </StyledCartItemContainer>
    );
  }

  return cart;
}
