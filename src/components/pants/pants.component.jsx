import { MainHatsContainer, MainHatsHeader } from "./pants.styles";
import { Pants } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const PantsComponent = ({deviceType}) => {
  return (
    <MainHatsContainer>
      <MainHatsHeader>Pants</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Pants} />
    </MainHatsContainer>
  );
};

export default PantsComponent;
