import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Products from "../Components/Products";
import FleetManagement from "../Components/Products/FleetManagement";
import Demo from "../Components/Demo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/request-quote" element={<Contact />} />
        <Route exact path="/request-demo" element={<Demo />} />

        <Route exact path="/solutions" element={<Products />} />
        <Route
          exact
          path="/products/fleet-management"
          element={<FleetManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
