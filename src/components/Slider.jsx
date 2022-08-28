import React, { useState, useEffect, useRef } from "react";

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
const featuredProducts = [
  "/images/car1.png",
  "/images/car2.png",
  "/images/car3.png",
];

const titles = [
  {
    title: "Hello World",
    desc: "This is an interesing fade in and out",
  },
  {
    title: "Hello New",
    desc: "This is an interesing fade in and out",
  },
  {
    title: "Amazing",
    desc: "This is an interesing fade in and out",
  },
  {
    title: "Stuff",
    desc: "This is an interesing fade in and out",
  },
  {
    title: "Staranger things",
    desc: "This is an interesing fade in and out",
  },
];


let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };

  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full  relative mt-[95px]">
      <div className="aspect-w-16 aspect-h-9">

        <img className="max-h-[80vh] w-full" src={featuredProducts[currentIndex]} alt="" />
        <div className="absolute h-20 w-full bottom-0 bg-zinc-900 bg-opacity-40">
          <h1 className="px-3 flex justify-between items-center">
            {titles[currentIndex]['title']}
          </h1>
          <p className="flex justify-between items-center">
            {titles[currentIndex]['desc']}
          </p>
        </div>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
