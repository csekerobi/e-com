import "./App.css";
import Home from "./pages/home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/all products/AllProducts";
import SingleProduct from "./pages/single product/SingleProduct";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
