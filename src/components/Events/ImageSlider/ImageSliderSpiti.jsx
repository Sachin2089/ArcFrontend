import React from 'react'
import { useState } from "react"



const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    dots : false
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    color: "#fff",
    zIndex: 30,
    cursor: "pointer",
    transition: "left 200ms ease-in-out",
  };
  
  const sliderStyles = {
    position: "relative",
   
  };
  
 
  
  
  

const ImageSliderSpiti = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
   
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

  return (
    <div className='sliderStyles object-cover object-center h-[500px] transition-all ease-in duration-500'>
      <div style={sliderStyles} className='md:h-[100%] h-[50%] '>
        <div>
            <div onClick={goToPrevious} style={leftArrowStyles} className='transition-all ease-in duration-500 md:text-5xl text-2xl'>
            ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles} className='md:text-5xl text-2xl'>
            ❱
            </div>
        </div>
      <div style={slideStylesWidthBackground}></div>
    
    </div>
    </div>
)
};

export default ImageSliderSpiti