import { MainHatsContainer, MainHatsHeader } from "./hatsPreview.styles";
import { Hats } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const HatsComponent = ({ ...props }) => {
  const deviceType = props.deviceType;
  const isTitleClicked = props.isTitleClicked;
  const CategoryClicked = props.CategoryClicked;
  return (
    <MainHatsContainer>
      <MainHatsHeader onClick={ () => {
        isTitleClicked('Hats');
        CategoryClicked(Hats);
      }}>Hats</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Hats} />
    </MainHatsContainer>
  );
};

export default HatsComponent;
