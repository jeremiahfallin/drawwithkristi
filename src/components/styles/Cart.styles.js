import styled from "styled-components";

const StyledCartSection = styled.section`
  margin-top: 24px;
  display: grid;

  @media (min-width: 360px) {
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledCartBody = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  height: 100%;
`;

const StyledCartTitle = styled.h2`
  display: grid;
  align-items: flex-end;
  line-height: 1.1;
  font-size: 1.1em;
`;

const StyledCartButton = styled.button`
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

const StyledCartImage = styled.img`
  width: auto;
  height: 100%;
`;

const StyledCartPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
  text-align: right;
`;

const StyledCartQuantity = styled.select`
  border: 1px solid;
  border-color: #ff9298;
  border-radius: 2;
  font-size: 1;
  padding: 8px;
`;

const StyledCartQuantityText = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
  text-align: right;
`;

export {
  StyledCartBody,
  StyledCartTitle,
  StyledCartButton,
  StyledCartImage,
  StyledCartPrice,
  StyledCartQuantity,
  StyledCartQuantityText,
};

export default StyledCartSection;
