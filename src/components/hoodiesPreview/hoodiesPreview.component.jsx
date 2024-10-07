import CardComponent from "../card/card.component";
import { MainContainer, MainHeaderCategory } from "./hoodiesPreview.styles";
import { Hoodies } from "../../utils/catagoriesData";

const HoodiesPreview = ({ ...props }) => {
  const deviceType = props.deviceType;
  const isTitleClicked = props.isTitleClicked;
  const CategoryClicked = props.CategoryClicked;
  return (
    <MainContainer>
      <MainHeaderCategory
        onClick={() => {
          isTitleClicked("Hoodies");
          CategoryClicked(Hoodies);
        }}
      >
        Hoodies
      </MainHeaderCategory>
      <CardComponent deviceType={deviceType} category={Hoodies} />
    </MainContainer>
  );
};

export default HoodiesPreview;
