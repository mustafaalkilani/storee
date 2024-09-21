import { Routes, Route } from "react-router-dom";
import NavigationBarComponent from "./routes/navigationBar/navigationBar.component";
import Home from "./routes/home/home.component";
import Store from "./routes/store/store.component";
import Login from "./routes/login/login.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBarComponent />}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
