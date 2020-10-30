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

export default StyledProductSection;
