import mobilevideoMP4 from "../assets/banner mobile.mp4"
import mobilevideoWEBM from "../assets/banner mobile.webm"
import mobileBackground from "../assets/HeroBG.webp"
import React from "react"
import {css} from "@emotion/react"
const mobileCSS = css`
padding-top: 3.5em;
width: 100vw;
background-image:url(${mobileBackground})
background-repeat: no-repeat;
background-size: stretch;
background-blend-mode: multiply;
`;
const MobileBanner = () => {

    return(
        <div css={mobileCSS}>
            <video autoPlay width={"100%"} muted>
            <source src={mobilevideoMP4} type="video/mp4"/>
            
            <source src={mobilevideoWEBM} type="video/webm"/>
            </video>
        </div>
    
    );
};
export default MobileBanner;
