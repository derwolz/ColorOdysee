import { useMediaQuery } from "../hooks/useMediaQuery";
import React, {useState} from "react";
import {css} from "@emotion/react";
const sizeSelector=css`
padding:1em;

margin: 3px;
background-color: #e58;
border-radius: .2em;
border-width: 1px;
border-color: black;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;

&:hover {
    background-color: #58c;
    
    box-shadow: -3px -3px 3px 3px inset #006;
    cursor: pointer;
}
display: flex;
flex-direction: row;
flex-wrap: wrap;

justify-content: center;
align-items: center;
box-shadow: -3px -3px 3px 3px inset #600;
`
const sizeBox = css`
display: flex;

flex-flow: row;
flex-wrap: wrap;

justify-content: space-around;
align-items: center;
`
const paletteBox = css`
display: block;

min-width: 5vmin;
min-height: 5vmin;
margin-left: 1px;
margin-bottom: 1px;
border-radius: 3px;
border-width: 1px;
border-color: #000;
background-color: #fff;
border-style: solid;
box-shadow: 3px 3px 3px 0px inset #c99;

`
const numCSS = css`
position: absolute;
font-size: 3em;
color: #baa;
text-shadow: 2px 2px 2px #000;
`
const palettSelectorCSS = css`
max-width: 700px;
display: flex;
flex-flow: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
const PaletteSelector = ({setK, setIsUpload}) => {
    const [sizes, setSizes] = useState(()=>{
        return [4,6,8,9,12,16]
    })
    const isMobile = useMediaQuery("(max-width:900px)");
    //console.log("isMobile",isMobile);
    const handleChange = (newK) => {
        //console.log(newK);
        setK(newK);
        setIsUpload(1);
    }
    const paletteButton = (number) => {
        const rows = []
        for (let i = 0; i < number; i++){
            rows.push(
                <div css={paletteBox} style={isMobile ? {minHeight: "50px", minWidth: "50px"} : {minHeight: "50px", minWidth: "50px"}} />
            )
        }
        return rows;
    }
    return (
    <div css={palettSelectorCSS}>
        
        
        <h2>Select the size of your palette</h2>
        <div css={sizeBox}>
            {
            sizes.map((x) => { return (
                <button css={sizeSelector} key={x} onClick={(arg)=>handleChange(x)} style={x ===6 || x === 8 || x === 12 ? {width: (Math.sqrt(x)+1)*65+'px'} : {width : Math.sqrt(x)*70+'px'}}>
                {paletteButton(x)}
                <span css={numCSS}>{x}</span></button>
            )})
            }
        </div>
    </div>
    )
    
};
export default PaletteSelector;


