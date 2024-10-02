import { useEffect, useState } from "react";
import {
  ProductCard,
  MainContainerForHoodie,
  ProductImage,
  ProductInformation,
  ProductTexts,
  ProductTitle,
  ProductPrice,
  ProductSubmitContainer,
  ProductAddToCart,
} from "./card.styles";

const CardComponent = ({ ...props }) => {

  const deviceType = props.deviceType;
  const category = props.category;

  const [visibleObject, setVisibleObject] = useState(category.slice(0, 6)); // initially show first 4 items
  const [index, setIndex] = useState(0); // track the index of first visible item
  const [animate, setAnimate] = useState(false); // animation state

  // Function to trigger animations and update the visible items
  const moveProducts = () => {
    setAnimate(true); // Start animation
    setTimeout(() => {
      // After animation is done, update the visible products
      const newIndex = (index + 1) % category.length; // Reset index when reaching the end
      setVisibleObject(category.slice(newIndex, newIndex + 7));
      setIndex(newIndex);
      setAnimate(false); // Reset animation
    }, 1000); // Adjust duration to match the animation duration
  };

  useEffect(() => {
    const interval = setInterval(moveProducts, 3000); // Move every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <MainContainerForHoodie>
      {visibleObject.map(({ id, name, price, imageUrl }, i) => {
        return (
          <ProductCard
            key={id}
            animateLeft={i === 0 && animate} // Apply moveLeft animation to first card
            animateRight={i === 3 && animate} // Apply moveRight animation to last card
          >
            <ProductImage src={imageUrl} style={{'maxWidth': `${deviceType === true ? '95vw': ''}`}}/>
            <ProductInformation
              style={{ display: `${deviceType === true ? "block" : ""}` }}
            >
              <ProductTexts>
                <ProductTitle>{name}</ProductTitle>
                <ProductPrice>${price}</ProductPrice>
              </ProductTexts>
              <ProductSubmitContainer>
                <ProductAddToCart>Add To Cart</ProductAddToCart>
              </ProductSubmitContainer>
            </ProductInformation>
          </ProductCard>
        );
      })}
    </MainContainerForHoodie>
  );
};

export default CardComponent;
