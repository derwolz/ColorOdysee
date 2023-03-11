import React, { useState } from "react";
import { css } from "@emotion/react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const paletteRow = css`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:space-between;
padding-bottom: 5px;
p {
    font-size: 12px;
}
`

const paletteDisplayCSS = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
padding: 5px;
border-radius: 3px;
box-shadow: -2px -1px 3px 4px inset #444;

`
const toolTipText = css`
visibility: hidden;
width: 120px;
min-height: 60px;
background-color: white;
color: black;
text-align: center;
padding: 10px 10px;
margin-left:-15px;
border-radius: 1px;
position: absolute;
z-index: 1;
`

const toolTip = css`
position: relative;
display: inline-block;
border-bottom: 1px dotted black;

&:hover h4 {
    visibility: visible;
}
`




const PaletteDisplay = ({ products, backup }) => {
    
    const [productlist, setProductList] = useState(products);
    const [backuplist, setBackuplist] = useState(backup);
    // limits the float for display to two digits
    const isMobile = useMediaQuery("(max-width:900px)");
    const limitFloat = (number) => {
        //console.log(number)
        return number.toFixed(2)
    }

    return (
        <div css={paletteDisplayCSS}>
            <div css={paletteRow} style={isMobile ? {width: "70vw"}:{ width: Math.sqrt(productlist.length) * 125 }} >
                {productlist.map((d) => {
                    
                    //This will iterate through the recommended object list, placing each image by its key, and displaying its similarity score

                    return (<div>
                        <a css={toolTip} key={d} href={d["amazon_link"]} rel="noreferrer noopener" target="_blank">
                        <span  style={{ height: "auto", margin: '3px 3px 3px 7px', height: 100, display: "flex", flexFlow: "column", color: "white", borderRadius: 4 + 'px', overflow: 'hidden' }}>
                            <img style={{width: "100px", height: 100+'px', maxWidth: "100px", zIndex:'0'}}src={d["amazon_img_link"]}/>
                            <h4 css={toolTipText} style={{zIndex:'1'}}>{d['name']}</h4>
                        </span>
                        </a>
                    </div>)
                })}

            <span style={{ color: "white" }}><p>As an Amazon Associate I earn from qualifying purchases.</p></span>
            </div>
        </div>

    )

};
export default PaletteDisplay;