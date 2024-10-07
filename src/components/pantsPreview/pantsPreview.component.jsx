import { MainHatsContainer, MainHatsHeader } from "./pantsPreview.styles";
import { Pants } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const PantsComponent = ({ ...props }) => {
  const deviceType = props.deviceType;
  const isTitleClicked = props.isTitleClicked;
  const CategoryClicked = props.CategoryClicked;
  return (
    <MainHatsContainer>
      <MainHatsHeader onClick={() => {
        isTitleClicked("Pants");
        CategoryClicked(Pants);
      }}>Pants</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Pants} />
    </MainHatsContainer>
  );
};

export default PantsComponent;
