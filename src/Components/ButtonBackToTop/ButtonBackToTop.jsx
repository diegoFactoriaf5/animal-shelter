import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import '../ButtonBackToTop/ButtonBackToTop.css'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ButtonBackToTop() {

   const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 900) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  

  return (
    <>
    {showButton && (
        <button id="btn-back-to-top"
        title="Ir a inicio"
        onClick={scrollToTop}>
        <BsFillArrowUpCircleFill />
        </button>
        
      )}
</>
  )
  
}

export default ButtonBackToTop