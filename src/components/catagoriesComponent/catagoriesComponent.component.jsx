import {
    Container,
    CategoryImage,
    CategoryName,
    CategoryPrice,
    CategoryItem,
    AddToCartButton, 
  } from "./catagoriesComponent.styles";
  
  const CatagoriesComponent = ({ category }) => {
    return (
      <Container>
        {category.map(({ id, name, price, imageUrl }) => (
          <CategoryItem key={id}>
            <CategoryImage src={imageUrl} alt={name} />
            <CategoryName>{name}</CategoryName>
            <CategoryPrice>${price}</CategoryPrice>
            <AddToCartButton>Add To Cart</AddToCartButton>
          </CategoryItem>
        ))}
      </Container>
    );
  };
  
  export default CatagoriesComponent;
  