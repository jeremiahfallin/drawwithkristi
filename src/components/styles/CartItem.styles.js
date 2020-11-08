import styled from "styled-components";

const StyledCartItemContainer = styled.article`
  display: grid;
  /* grid-template-rows: repeat(auto-fill, minmax(min(10rem, 100%), 1fr)); */
  grid-template-rows: auto 150px;
  gap: 8px;
`;

const StyledCartItemQuantityContainer = styled.div`
  /* display: grid;
  gap: 8px;
  grid-template-columns: auto 50px; */
`;

export { StyledCartItemQuantityContainer };
export default StyledCartItemContainer;
