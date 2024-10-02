import styled from "styled-components";


export const MainContainerForHoodie = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  height: 500px;
  margin: 0;
`;

export const ProductInformation = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 30%;
  width: 100%;
  border: 1px solid #000;
  border-top: 0;
  border-radius: 0 0 30px 30px;
  display: none;
`;

export const ProductCard = styled.div`
  width: auto;
  height: 90%;
  margin: 10px 15px;
  position: relative;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover ${ProductInformation} {
    display: block;
  }
`;

export const ProductImage = styled.img`
  height: 100%;
  width: auto;
  border-radius: 30px;
  // object-fit: none;
`;

export const ProductTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.h1`
  font-size: 1rem;
  font-weight: initial;
  padding: 5px 5px 0 5px;
`;

export const ProductPrice = styled.h2`
  font-size: 0.9rem;
  font-weight: initial;
  padding-right: 5px;
`;

export const ProductSubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 55%;
`;

export const ProductAddToCart = styled.button`
  padding: 10px 30px;
  text-transform: uppercase;
  opacity: 0.85;
  cursor: pointer;
  background: transparent;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &: @keyframes {
    0% {
      background-color: #008cba;
    }
    50% {
      background-color: #006699;
    }
    100% {
      background-color: #008cba;
    }
  }
`;
