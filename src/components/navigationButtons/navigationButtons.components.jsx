import { useState, useEffect } from "react";
import { NavButton } from "./navigationButtons.styles";

const NavigationDirectory = [
  {
    to: "/",
    name: "home",
  },
  {
    to: "/store",
    name: "store",
  },
  {
    to: "/login",
    name: "login",
  },
  {
    to: "/checkout",
    name: "checkout",
  },
];

const NavigationButtons = () => {
  const [selectedButton, setSelectedButton] = useState("home");
  const [border, setBorder] = useState(false);
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
            onClick={() => setSelectedButton(element.name)}
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
