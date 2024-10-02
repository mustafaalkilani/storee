import { MainHatsContainer, MainHatsHeader } from "./hats.styles";
import { Hats } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const HatsComponent = ({deviceType}) => {
  return (
    <MainHatsContainer>
      <MainHatsHeader>Hats</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Hats} />
    </MainHatsContainer>
  );
};

export default HatsComponent;
