import { useState, useEffect } from "react";
import { MainHeader, MainHeaderContainer } from "./home.styles";
import HoodiesComponent from "../../components/hoodies/hoodies.component";
import HatsComponent from "../../components/hats/hats.component";
import PantsComponent from "../../components/pants/pants.component";
import JacketsComponent from "../../components/jackets/jackets.component";
const Home = () => {
  const [isDeviceTypeIsPhone, setIsDeviceTypeIsPhone] = useState(false);
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
      <HoodiesComponent deviceType={isDeviceTypeIsPhone}/>
      <JacketsComponent deviceType={isDeviceTypeIsPhone} />
      <PantsComponent deviceType={isDeviceTypeIsPhone} />
      <HatsComponent deviceType={isDeviceTypeIsPhone}/>
    </>
  );
};

export default Home;
