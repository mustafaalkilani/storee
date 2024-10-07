import { useState, useEffect } from "react";
import { NavButton } from "./navigationButtons.styles";
import { useLocation } from "react-router-dom";
const NavigationDirectory = [
  {
    to: "/",
    name: "home",
    navigate: '/',
  },
  {
    to: "/checkout",
    name: "checkout",
    navigate: 'checkout'
  },
  {
    to: "/about",
    name: "about",
    navigate: 'about'
  },
  {
    to: "/login",
    name: "login",
    navigate: 'login'
  },
];

const NavigationButtons = () => {
  const [selectedButton, setSelectedButton] = useState("home");
  const [border, setBorder] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (selectedButton === "home") {
      setBorder(true);
    }
  }, [selectedButton]);
  return (
    <>
      {NavigationDirectory.map((element) => {
        return (
          <NavButton
            to={element.to}
            onClick={() => {
              setSelectedButton(element.name);
              element.navigate === '/' ? location(element.navigate): <></>;
            }}
            style={{
              border: `${
                selectedButton === element.name && border === true
                  ? "1px solid #000"
                  : "none"
              }`,
            }}
            key={element.name}
          >
            {element.name}
          </NavButton>
        );
      })}
    </>
  );
};

export default NavigationButtons;
