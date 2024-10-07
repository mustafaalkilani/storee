import { useState, useEffect } from "react";
import { MainHeader, MainHeaderContainer } from "./home.styles";
import HoodiesPreview from '../../components/hoodiesPreview/hoodiesPreview.component'
import HatsPreview from "../../components/hatsPreview/hatsPreview.component";
import PantsPreview from "../../components/pantsPreview/pantsPreview.component";
import JacketsPreview from "../../components/jacketsPreview/jacketsPreview.component";
const Home = ({ TitleClicked, CateClicked }) => {
  const [isDeviceTypeIsPhone, setIsDeviceTypeIsPhone] = useState(false);
  const [isCatePreviewTitleClickedType, setIsCatePreviewTitleClickedType] = useState('');
  const [categoryTypeClicked, setCategoryTypeClicked] = useState('');
  useEffect(() => {
    TitleClicked(isCatePreviewTitleClickedType);
    CateClicked(categoryTypeClicked);
  }, [isCatePreviewTitleClickedType, categoryTypeClicked])
  useEffect(() => {
    const deviceDetails = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let mobileDevice = regexp.test(deviceDetails);
    if (mobileDevice) {
      setIsDeviceTypeIsPhone(true);
    } else {
      setIsDeviceTypeIsPhone(false);
    }
  }, [])
  return (
    <>
      <MainHeaderContainer>
        <MainHeader style={{'display': `${isDeviceTypeIsPhone === true ? 'none': 'block'}`}}>Welcome To our store</MainHeader>
      </MainHeaderContainer>
      <HoodiesPreview deviceType={isDeviceTypeIsPhone} isTitleClicked={setIsCatePreviewTitleClickedType} CategoryClicked={setCategoryTypeClicked}/>
      <JacketsPreview deviceType={isDeviceTypeIsPhone} isTitleClicked={setIsCatePreviewTitleClickedType} CategoryClicked={setCategoryTypeClicked}/>
      <PantsPreview deviceType={isDeviceTypeIsPhone} isTitleClicked={setIsCatePreviewTitleClickedType} CategoryClicked={setCategoryTypeClicked}/>
      <HatsPreview deviceType={isDeviceTypeIsPhone} isTitleClicked={setIsCatePreviewTitleClickedType} CategoryClicked={setCategoryTypeClicked}/>
    </>
  );
};

export default Home;
