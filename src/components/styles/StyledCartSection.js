import styled from "styled-components";

const StyledCartSection = styled.section`
  margin-top: 24px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default StyledCartSection;
