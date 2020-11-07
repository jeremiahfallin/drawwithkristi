import styled from "styled-components";

const StyledCartItemContainer = styled.article`
  display: grid;
  grid-template-rows: 50px minmax(auto, 118px);
  gap: 8px;
  height: 100%;
`;

const StyledCartItemQuantityContainer = styled.div`
  /* display: grid;
  gap: 8px;
  grid-template-columns: auto 50px; */
`;
export { StyledCartItemQuantityContainer };
export default StyledCartItemContainer;
