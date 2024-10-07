import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

export const HeaderText = styled.h1`
  letter-spacing: 2rem;
  fonts-size: 1.5rem;
  font-family: Roboto, sans-serif;
  font-transform: uppercase;
  position: fixed;
  top: 50%;
  left: 11%;
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
