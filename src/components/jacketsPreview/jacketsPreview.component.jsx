import { MainHatsContainer, MainHatsHeader } from "./jacketsPreview.styles";
import { Jackets } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const JacketsComponent = ({ ...props }) => {
  const deviceType = props.deviceType;
  const isTitleClicked = props.isTitleClicked;
  const CategoryClicked = props.CategoryClicked;
  return (
    <MainHatsContainer
      onClick={() => {
        isTitleClicked("Jackets");
        CategoryClicked(Jackets);
      }}
    >
      <MainHatsHeader>Jackets</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Jackets} />
    </MainHatsContainer>
  );
};

export default JacketsComponent;
