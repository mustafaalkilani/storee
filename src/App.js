import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavigationBarComponent from "./routes/navigationBar/navigationBar.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Login from "./routes/login/login.component";
import Checkout from "./routes/checkout/checkout.component";
import CatagoriesComponent from "./components/catagoriesComponent/catagoriesComponent.component";

const App = () => {
  const [whatTitleClicked, setWhatTitleClicked] = useState('');
  const [whatCateClicked, setWhatCateClicked] = useState('');
  const navigate = useNavigate();

  // Effect to handle redirection once both values are set
  useEffect(() => {
    if (whatTitleClicked && whatCateClicked) {
      navigate(`/${whatTitleClicked}`);
    }
  }, [whatTitleClicked, whatCateClicked, navigate]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBarComponent />}>
        <Route 
          index 
          element={<Home TitleClicked={setWhatTitleClicked} CateClicked={setWhatCateClicked} />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route 
          path={`/${whatTitleClicked}`} 
          element={<CatagoriesComponent category={whatCateClicked} />} 
        />
      </Route>
    </Routes>
  );
};

export default App;
