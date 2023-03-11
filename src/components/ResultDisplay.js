import React, { useEffect, useState } from "react"
import { css } from '@emotion/react'

const ResultCSS = css`


overflow:hidden;
padding: 60px 10px;
background-color: #000;
border-radius: 3px;
box-shadow: -1px -1px 4px 4px inset #222;

`

const ResultDisplay = ({ colors, image }) => {
    const [colorhexes, setColorHexes] = useState(colors);
    const [img, setImage] = useState(image);
    const [c, setC] = useState("loading")
    //console.log("colorhexes", colorhexes);


    return (
            <div css={ResultCSS}>
                <img style={{ width: 250, height: 'auto', boxShadow: "0px 9px 9px -1px #666, 0px -9px 9px -1px #666"} } src={img} crossOrigin={"use-credentials"} />
            </div>
    )
}
export default ResultDisplay;