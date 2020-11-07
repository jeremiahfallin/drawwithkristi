import styled from "styled-components";

const StyledProductSection = styled.section`
  margin-top: 24px;
  display: grid;

  @media (min-width: 360px) {
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledProductButton = styled.button`
  background: #dce6ff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 800;
  grid-column: 1 / 4;
  padding: 8px;
  text-shadow: 0.05em 0.05em #4f4f4f99, 0.05em -0.05em #4f4f4f99,
    -0.05em 0.05em #4f4f4f99, -0.05em -0.05em #4f4f4f99;
  text-transform: uppercase;
`;

const StyledProductDescription = styled.p`
  font-size: 14px;
`;

const StyledProductQuantity = styled.input`
  border: 1px solid;
  border-color: #ff9298;
  border-radius: 2;
  font-size: 1;
  padding: 8px;
`;

const StyledProductImage = styled.img`
  width: 100%;
`;

const StyledProductTitle = styled.h2`
  line-height: 1.1;
  font-size: 20px;
`;

const StyledProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
  text-align: right;
`;

export {
  StyledProductButton,
  StyledProductDescription,
  StyledProductImage,
  StyledProductQuantity,
  StyledProductTitle,
  StyledProductPrice,
};

export default StyledProductSection;
