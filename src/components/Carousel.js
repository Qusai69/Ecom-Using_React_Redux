import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../Data";
import Card from "./Card";

const Carousel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  useEffect(() => {
    // Fetch products on component mount
    dispatch(fetchProducts());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 text-2xl z-10"
      >
        &#10094;
      </button>
      <div
        className="flex transition-transform duration-500 my-4"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="min-w-full box-border flex justify-start"
            style={{ width: `${100 / totalPages}%` }}
          >
            <div className="flex items-center justify-start space-x-4">
              {products
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((product) => (
                  <div key={product.id} className="w-1/4 p-2 my-4 ml-[6.5rem]">
                    <Card product={product} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 text-2xl z-10"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
