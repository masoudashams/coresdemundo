import React, { useState, useEffect, useRef } from "react";

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
const featuredProducts = [
  "/images/car1.png",
  "/images/card3.png",
  "/images/card5.png",
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
    
    setCurrentIndex(i);
   
    refs[i].current.scrollIntoView({
     
      behavior: 'smooth',
    
      block: 'nearest',
    
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
   
      <div ref={slideRef} className=" w-full inline-flex overflow-x-hidden relative mt-[95px]">
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

      {showButtons && <div className="fixed   top-1/2 w-full transform -translate-y-1/2 px-3 flex justify-between ">
      
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={previousImage}>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextImage}>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>


    









      </div>

      }
    </div>
   
  );
}

