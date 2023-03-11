import React from 'react';
import { css } from '@emotion/react';
import CosmResult from '../assets/CosmeticRec.webp'
import CosmChoice from '../assets/palette choice.webp'
import CosmUpload from '../assets/Upload image.webp'

const ASection = css`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const images = css`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
align-items: center;
background-color: #6f6f6f;
text-align: center;
width: 100vw;
h4{
    font-size: calc(3vmin)
}
padding-bottom: 2em;
`
const TitleBar = css`
align-self: center;
text-align: center;
h1 {
    font-size: calc(6vmin);
}


`
const ACol = css`
display: flex;
flex-direction: column;
`
const AboutSection = () => {
    return (
        <div css={ASection}>
            <div css={ACol}>
                <div css={images}>
                    <div>
                    <h4 style={{margin:"20px 8vmax", fontSize: "calc(3vmin)"}}> Select a palette size</h4>
                    <img src={CosmChoice} style={{maxWidth:33+"vmax"}} alt={"Selection of palette"}/>
                    </div>
                    <div>
                    <h4 style={{margin:"20px 8vmax", fontSize: "calc(3vmin)"}}> Upload the image </h4>
                        <img src={CosmUpload} style={{maxWidth:33+"vmax"}} alt={"image upload"}/>
                    </div>
                    <div>
                    <h4 style={{margin:"20px 8vmax", fontSize: "calc(3vmin)"}}> Get Your Results!</h4>
                        <img src={CosmResult} style={{maxWidth:33+"vmax"}} alt={"image of result"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutSection;