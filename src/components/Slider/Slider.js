import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
const EvenCSS = css`
display: flex;
flex-flow: row;
flex-wrap: nowrap;
align-items: center;
align-content: center;
justify-items: center;
justify-content: center;
`
const Slider = ({sendValue, min, max, steps}) => {
  

  const handleChange = (event) => {
    sendValue(event.target.value);
  }

  return (
    <div css={EvenCSS}>
      <input
        type="range"
        min={min}
        max={max}
        step={steps}
        onChange={handleChange}
      /> 
    </div>
  );
}

export default Slider;