import { MainHatsContainer, MainHatsHeader } from "./jackets.styles";
import { Jackets } from "../../utils/catagoriesData";
import CardComponent from "../card/card.component";

const JacketsComponent = ({deviceType}) => {
  return (
    <MainHatsContainer>
      <MainHatsHeader>Jackets</MainHatsHeader>
      <CardComponent deviceType={deviceType} category={Jackets} />
    </MainHatsContainer>
  );
};

export default JacketsComponent;
