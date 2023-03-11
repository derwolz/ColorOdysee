import desktopBannerMP4 from "../assets/banner full screen.mp4"
//import desktopBannerOGG from "../assets/banner-full-screen.ogg"
import desktopBannerWEBM from "../assets/banner full screen.webm"
import { css } from "@emotion/react"
import desktopBackground from "../assets/desktopBackground.webp"
import React from "react"
const desktopCSS = css`
background-image:url(${desktopBackground})
background-repeat: no-repeat;
background-size: cover;
background-blend-mode: multiply;

`;
const DesktopBanner = () => {

    return (
        <div css={desktopCSS}>
            <video autoPlay width={"100%"} muted>
                <source src={desktopBannerMP4} type="video/mp4"></source>
                
                <source src={desktopBannerWEBM} type="video/webm"></source>
                Your browser doesn't support the video tag
            </video>
        </div>
    );
};
export default DesktopBanner;
