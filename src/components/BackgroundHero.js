import MobileBanner from "./MobileBanner";
import DesktopBanner from "./DesktopBanner";
import { useMediaQuery } from "../hooks/useMediaQuery";
import React from "react";
import {css} from "@emotion/react";
import AboutSection from "./AboutSection";
import GeneratedPalettes from './GeneratedPalettes';
import InviteButton from "./InviteButton";
const AboutSectionCSS = css`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h4 {
    font-size: calc(3vmax);
}
`;
const InviteSection = css`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
margin: 3em;
`;
const BackgroundHero = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    //console.log("isMobile",isMobile);
    return (
        <div >
            
            {isMobile ? <MobileBanner/> : <DesktopBanner/>}
                <section css={AboutSectionCSS}>
                    <AboutSection/>
                    <h4>You are unique, why not your makeup?</h4>
                    
                    <GeneratedPalettes/>
                </section>
                <section css={InviteSection}>
                    <InviteButton/>
                </section>
        </div>
    )
    
};
export default BackgroundHero;