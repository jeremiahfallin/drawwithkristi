import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 24px;
  display: grid;
  @media (min-width: 360px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StyledSection;
