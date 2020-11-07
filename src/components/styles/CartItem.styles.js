import styled from "styled-components";

const StyledCartItemContainer = styled.article`
  display: grid;
  grid-template-rows: minmax(auto, 100px) minmax(auto, 100px);
  gap: 8px;
`;

const StyledCartItemQuantityContainer = styled.div`
  /* display: grid;
  gap: 8px;
  grid-template-columns: auto 50px; */
`;
export { StyledCartItemQuantityContainer };
export default StyledCartItemContainer;
