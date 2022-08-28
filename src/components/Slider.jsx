import React, { useState, useEffect, useRef } from "react";

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
const featuredProducts = [
  "/images/car1.png",
  "/images/car2.png",
  "/images/car3.png",
];

const titles = [
  {
    title: "Transforming neighborhoods",
    desc: "Dengo Chocolates hired Colors of the World to color the wall of its factory. The author of the work was the Congolese artist Lavi Israël, 28 years old, who has been in Brazil since 2015.",
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
  const [showButtons, setShowButtons] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 600) {
      setShowButtons(true)
    }
    else setShowButtons(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const refs = featuredProducts.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});


  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentIndex(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  const slideRef = useRef();


  const nextImage = () => {
    if (currentIndex >= featuredProducts.length - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentIndex + 1);
    }
  };
  const previousImage = () => {
    let totalImages = featuredProducts.length;
    if (currentIndex === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentIndex - 1);
    }
  };

  return (
    <div ref={slideRef} className="w-full inline-flex overflow-x-hidden relative mt-[95px]">
      {featuredProducts.map((img, i) => (
        <div key={i} ref={refs[i]} className="w-full flex-shrink-0 aspect-w-16 aspect-h-9">
          <img className="max-h-[80vh] w-full" src={img} alt="" />
          <div className="absolute flex justify-start items-end h-full w-full bottom-0 bg-gradient-to-b from-transparent to-zinc-900 bg-opacity-40">
            <div className="p-12">
              <h1 className="text-left">
                {titles[i]['title']}
              </h1>
              <p className="text-left max-w-md">
                {titles[i]['desc']}
              </p>
            </div>
          </div>
        </div>
      ))}

      {showButtons && <div className="fixed w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={previousImage}
        >

          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3504 12.0344L18.3013 31.0167L17.7929 31.5234L19.0527 32.7876L17.7929 34.0518L18.3013 34.5585L37.3504 53.5408L40.8797 49.999L23.6077 32.7876L40.8797 15.5762L37.3504 12.0344ZM62.5 32.5C62.5 49.0685 49.0685 62.5 32.5 62.5C15.9315 62.5 2.5 49.0685 2.5 32.5C2.5 15.9315 15.9315 2.5 32.5 2.5C49.0685 2.5 62.5 15.9315 62.5 32.5Z" stroke="white" strokeWidth="2" />
          </svg>



        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={nextImage}
        >
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6496 12.0344L46.6987 31.0167L47.2071 31.5234L45.9473 32.7876L47.2071 34.0518L46.6987 34.5585L27.6496 53.5408L24.1203 49.999L41.3923 32.7876L24.1203 15.5762L27.6496 12.0344ZM2.5 32.5C2.5 49.0685 15.9315 62.5 32.5 62.5C49.0685 62.5 62.5 49.0685 62.5 32.5C62.5 15.9315 49.0685 2.5 32.5 2.5C15.9315 2.5 2.5 15.9315 2.5 32.5Z" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
      }
    </div>
  );
}
