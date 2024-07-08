import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sproduct = () => {
  const { proId } = useParams();
  const [product, setProduct] = useState({});

  const url = `https://fakestoreapi.com/products/${proId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 px-4">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src={DOMPurify.sanitize(product.image)}
            alt={product.title}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-300">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sproduct;
