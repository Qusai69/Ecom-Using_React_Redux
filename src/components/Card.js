import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseAmount, increaseAmount } from "../features/basketSlice";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Sproduct from "./Sproduct";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);
  const [amt, setAmt] = useState(product.amount);

  const addToCart = () => {
    setCart(true);
    dispatch(increaseAmount({ name: product.title }));
    setAmt(amt + 1);
  };

  const minus = () => {
    if (amt > 1) {
      dispatch(decreaseAmount({ name: product.title }));
      setAmt(amt - 1);
    } else if (amt === 1) {
      setCart(false);
      setAmt(0);
    }
  };

  const plus = () => {
    dispatch(increaseAmount({ name: product.title }));
    setAmt(amt + 1);
  };

  // Generating star ratings based on product.rating.rate
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;
    return (
      <span key={i}>
        {product.rating && product.rating.rate >= i + 1 ? (
          <FaStar className="text-yellow-500/80" />
        ) : product.rating && product.rating.rate >= number ? (
          <FaStarHalfAlt className="text-yellow-500/80" />
        ) : (
          <AiOutlineStar className="text-yellow-500/80" />
        )}
      </span>
    );
  });

  return (
    <div className="card">
      <Link to={`/Sproduct/${product.id}`} element={<Sproduct />}>
        <img
          className="w-full h-80 object-cover"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="p-5 flex flex-col gap-3">
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>
        <div>
          <span className="text-xl font-bold">$ {product.price}</span>
          <span className="flex items-center mt-1">
            {ratingStar}
            <span className="text-gray-500 text-xs ml-2">
              {product.rating ? `${product.rating.count} reviews` : 'No reviews'}
            </span>
          </span>
        </div>
        <div className="mt-5 flex gap-2">
          {cart ? (
            <>
              <button className="button-primary1" onClick={minus}>
                -
              </button>
              <span className="py-2 text-black text-xl font-bold">{amt}</span>
              <button className="button-primary1" onClick={plus}>
                +
              </button>
            </>
          ) : (
            <button className="button-primary" onClick={addToCart}>
              Add to Cart
            </button>
          )}
          <button className="button-icon">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="button-icon">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
