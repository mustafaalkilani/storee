import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  NavigationBar,
  NavigationBarForPhoneDevices,
  NavigationBarSectionForPhoneDevices
} from "./navigationBar.styles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons.components";

const NavigationBarComponent = () => {
  const [isDeviceTypeIsPhone, setIsDeviceTypeIsPhone] = useState(false);
  const [phoneNavigationIsOpened, setPhoneNavigationIsOpened] = useState(false);

  useEffect(() => {
    const deviceDetails = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let mobileDevice = regexp.test(deviceDetails);
    if (mobileDevice) {
      setIsDeviceTypeIsPhone(true);
    } else if (!mobileDevice) {
      setIsDeviceTypeIsPhone(false);
    }
  }, []);

  return (
    <>
      {isDeviceTypeIsPhone ? (
        <NavigationBarSectionForPhoneDevices>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setPhoneNavigationIsOpened(true)}
            style={{
              display: `${phoneNavigationIsOpened ? "none" : "block"}`,
              fontSize: "20px",
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setPhoneNavigationIsOpened(false)}
            style={{
              display: `${phoneNavigationIsOpened ? "block" : "none"}`,
              fontSize: "22px",
            }}
          />
          <NavigationBarForPhoneDevices>
            {phoneNavigationIsOpened ? <NavigationButtons /> : " "}
          </NavigationBarForPhoneDevices>
        </NavigationBarSectionForPhoneDevices>
      ) : (
        <NavigationBar>
          <NavigationButtons />
        </NavigationBar>
      )}
      <Outlet />
    </>
  );
};

export default NavigationBarComponent;
