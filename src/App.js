import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import Sproduct from "./components/Sproduct";
import { UpdateTotal } from "./features/basketSlice";
import Cart from "./components/Cart";

function App() {
  const location = useLocation();
  const [product, setProducts] = useState([]);
  const isLoginPage = location.pathname === "/Login";
  const isRegisterPage = location.pathname === "/Register";
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const productsWithAmount = response.data.map((product) => ({
          ...product,
          amount: 1,
        }));
        setProducts(productsWithAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UpdateTotal());
  }, [products, dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {!isLoginPage && !isRegisterPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Carousel products={product} />} />
          <Route
            path="/Sproduct/:proId"
            element={<Sproduct product={product} />}
          />
        </Routes>
      </main>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </div>
  );
}

export default App;
