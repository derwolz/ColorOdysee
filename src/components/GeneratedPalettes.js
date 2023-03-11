import React, { useState } from 'react';
import {css} from '@emotion/react';
import tulip from '../assets/tulipfieldresult.webp'
import hummingbird from '../assets/hummingbirdresult.webp'
import stainedglass from '../assets/tree result.webp'
import dune from '../assets/dune result.webp'
import Carousel from './Carousel/Carousel';
const resultsCSS = css`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;

`;
const GeneratedPalettes = () =>{
    const [images, setImages] = useState([{"name":tulip,"altText":"tulip field with derived paltte"},{"name": hummingbird,"altText":"humming bird with derived palette"},{"name":stainedglass,"altText":"Tree with derived palette"},{"name":dune, "altText":"desert with derived palette"}])
    
    return (
        <div css={resultsCSS}>
            <Carousel images={images} />
        </div>
        
    );
}
export default GeneratedPalettes;