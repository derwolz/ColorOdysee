import { css } from "@emotion/react";
import React, {useEffect, useRef, useState} from "react";
import {RWebShare} from "react-web-share";
import { baseApi } from "../../Config/api";
const share = css`

background-color: gold;
width: 6em;
height: 3em;
margin: 4px 4px 4px 4px;
border-radius: 4px;

box-shadow: 3px 3px;
&:hover {
    box-shadow: 0px 0px;
}

`
const WebShare = ({imgURL}) => {
    const [imgLink, setImgLink] = useState(imgURL);
    useEffect(() => {
        setImgLink(imgURL);
    })
    return (
        <div>
            <RWebShare data={{
                text:"I Generated this Color Story from ColorOdysee.com",
                url: imgLink,
                title: "My Custom Palette"
            }}>
                <button id="shareButton"  css={share} > Share 🔗 </button>
            </RWebShare>
                
        </div>
    );
}
export default WebShare;