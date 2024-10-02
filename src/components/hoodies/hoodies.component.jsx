import CardComponent from "../card/card.component";
import { MainContainer, MainHeaderCategory } from "./hoodies.styles";
import { Hoodies } from "../../utils/catagoriesData";


const HoodiesComponent = ({...props}) => {
  const deviceType = props.deviceType;
  return (
    <MainContainer>
      <MainHeaderCategory>Hoodies</MainHeaderCategory>
      <CardComponent deviceType={deviceType} category={Hoodies}/>
    </MainContainer>
  );
};

export default HoodiesComponent;
