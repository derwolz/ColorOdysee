import React, { useState, useEffect } from 'react';
import { css, keyframes } from '@emotion/react';
import {useMediaQuery} from '../../hooks/useMediaQuery';
const slide = keyframes`
0% {left: 100%}
4% {left: 0%}
33.33% {left: 0%}
37.33% {left: -100%}
100% {left: -100%}
`;
const carCss = css`
/* Set the container to be a flex container */
display: flex;
/* Center the content inside the container */
align-items: center;
justify-content: center;
/* Set the container's height and width */
height: calc(34vmax);
min-width: calc(50vmax);
/* Add a background color */
background-color: #f0f0f0;
/* Add some padding */
padding: 20px;
/* Add some border */
border: 2px solid #ccc;
/* Add some border radius */
border-radius: 10px;
img {
height: calc(28vmax);
width: calc(40vmax);
}
`
const buttonCSS = css`
width:4rem;
height:4rem;
font-size: 2rem;
border-radius: 4rem;
background-color: rgba(50,30,40,.5);
color: rgba(240,240,240,.6);
margin: 8px;
`
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex === images.length ? 0 : newIndex);
        setTransition(false);
      }, 600);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const previous = () => {
    setTransition(true);
    setTimeout(() => {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
      setTransition(false);
    }, 500);
  };

  const next = () => {
    setTransition(true);
    setTimeout(() => {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex === images.length ? 0 : newIndex);
      setTransition(false);
    }, 500);
  };

  return (
    <div css={carCss} style={isMobile ? {width: "calc(10vmax)", height: "calc(18vmax)"}: {}}>
      <button css={buttonCSS} onClick={previous} style={isMobile ? {width: '2rem', height: '2rem'}: {}}>&lt;</button>
      <img 
        src={images[currentIndex]["name"]}
        alt={images[currentIndex]["altText"]}
        css={transition ? css`animation: ${slide} 0.5s ease-in-out;` : null}
        style={isMobile ? {width: "calc(32vmax)", height:"calc(18vmax)"} : {}}
      />
      
      <button css={buttonCSS} onClick={next} style={isMobile ? {width: '2rem', height: '2rem'}: {}}> &gt;</button>
    </div>
  );
};

export default Carousel;