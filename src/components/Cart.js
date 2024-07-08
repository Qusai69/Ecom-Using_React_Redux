import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  UpdateTotal,
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "../features/basketSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basket);

  const handleAddToCart = (product) => {
    dispatch(increaseAmount({ name: product.title }));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseAmount({ name: product.title }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeItem({ name: product.title }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(UpdateTotal());
  }, [cart.products, dispatch]);

  return (
    <div className="cart-container text-black">
      <h2>Shopping Cart</h2>
      {cart.products.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/Products">Start Shopping</Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.products.map((product) => (
              <div className="cart-item" key={product.id}>
                <div className="cart-product">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h3>{product.title}</h3>
                    <button onClick={() => handleRemoveFromCart(product)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${product.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(product)}>-</button>
                  <div className="count">{product.amount}</div>
                  <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${product.price * product.amount}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">$ {cart.total}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/Products">Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
