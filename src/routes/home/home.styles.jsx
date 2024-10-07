import styled from "styled-components";

export const MainHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const MainHeader = styled.h1`
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  letter-spacing: 2rem;
  font-size: 3rem;
  @media (max-width: 1216px) {
    letter-spacing: 1rem;
  }
  @media (max-width: 896px) {
    letter-spacing: 0.5rem;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;
