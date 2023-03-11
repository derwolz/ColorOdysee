import React, { useState } from "react";
import { css } from '@emotion/react';
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {baseApi} from '../../Config/api';
import { getSessionToken } from "../../Config/CookieHandler";
const paletteBox = css`

display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`
// const paletteItem = css`
// display: flex;
// flex-flow: column;
// width: 50;
// height: 5em;
// justify-content: space-between;
// margin-right: 10px;
// margin-left: 10px;
// img {
//     width: auto;
//     height: auto;
//     max-width: 50px;
// }
// &:hover .paletteName{
//     display:block;
// }
// `
const paletteRow = css`
display: flex;
flex-flow: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
// const buyButton = css`
// width: 6em;
// height: 3em;
// background-color: #dc4;
// `
// const custButton = css`
// width: 6em;
// height: 3em;
// background-color: #4cd;
// margin-top: 10px;
// `
// const cartButton = css`
// width: 6em;
// height: 3em;
// background-color: #f68;
// margin-bottom: 10px;
// `
const paletteShelf = css`

display: flex;
flex-flow: row;
justify-content: space-between;
margin-top: 10px;
padding-top: 20px;
padding-bottom: 20px;
background-color: #808080;
margin-right: 5em;
margin-left: 5px;
border-radius: 4px;
`
const purchaseButtons = css`
width: 10%;

display: flex;
flex-flow: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-right 20px;

`
const paletteContent = css`
display: flex;
flex-flow: column;
margin-top: 18px;
margin-botom: 20px;
padding: 20px;
align-items: center;

`
const deleteButton = css`
width: 6em;
height: 3em;
background-color: #f68;
box-shadow: 3px 3px;
margin: 4px 4px 4px 4px;
&:hover {
    box-shadow: 0 0;
}
`
// const paletteName = css`
// position: relative;
// display: inline-block;
// width: 6em;
// background-color: #f68;
// box-shadow: 3px 3px;
// margin: 4px 4px 4px 4px;
// &:hover h4 {
//     visibility: visible;
// }
// `
const toolTipText = css`
visibility: hidden;
width: 120px;
min-height: 60px;
background-color: white;
color: black;
text-align: center;
padding: 10px 10px;
margin-left:-15px;
margin-top: -10px;
border-radius: 1px;
position: absolute;
z-index: 1;

`
const toolTip = css`
position: relative;
display: inline-block;
border-bottom: 1px dotted black;
height: 50px;
margin: 10px;
img {
    max-height: 65px;
}
&:hover h4 {
    visibility: visible;
}
`
const collectionName = css`
position: relative;
display: inline-block;
margin-left: -2em;
font-size: 1.8em;
color: #000;


`
const CollectionResult = ({ collections }) => {
    // const [isHidden, setIsHidden] = useState(true);
    const [coll, setCollections] = useState(collections);
    const [isMobile, setIsMobile] = useState(useMediaQuery());
    const [stoken, setStoken] = useState(getSessionToken());
    // const [selectedCollections, setSelectedCollections] = useState(null);
    
    //console.log("coll", coll);
    // const addToCart = () => {
    //     console.log("Add to Cart button")
    // }
    // const buyNow = () => {
    //     console.log("buy now button")
    // }
    // const handleCustomize = () => {
    //     console.log("feature not yet implemented")
    // }
    const getWidth = (len) =>{
        len = Math.floor(Math.sqrt(len)) * 120+'px';
        //console.log("lengith",len)
        return len;

    }
    const deleteCollection = (pk) =>{
        const data = {"pk":pk}
        console.log("n");
        const response = baseApi.delete("deletecollection/"+pk, {
            Headers : {
                'Authorization': 'Token ' + stoken,
            }
        } ).then(
            setCollections(coll.filter(item => item['pk'] != pk))
        )
    }

    const getMobileFlex = (mobility) =>{
        if (mobility)
            return 'column'
        return 'row'
    }

    return (
        <div css={paletteBox}>
            {coll.map((d) => {
                return (<div css={paletteContent}>
                
                    <div key={d['pk']} css={paletteShelf} style={{width: getWidth(d['palette'].length) ,flexDirection: getMobileFlex(isMobile)}}>
                        
                        <div css={paletteRow}>
                        {d['palette'].map((p) => {
                            return (
                                <div key={p['pk']} css={toolTip}>
                                    <a href={p['amazon_link']} rel="noreferrer noopener" target="_blank">
                                    <img src={p['amazon_img_link']} alt={p['name']} />
                                    </a>
                                    <h4 key={p['name']} css={toolTipText}>{p['name']}</h4>
                                </div>
                            );
                        })
                       
                        }
                        
                        </div>
                        
                        <div css={purchaseButtons} style={{flexDirection: getMobileFlex(!isMobile)}}>{
                        <button css={deleteButton} onClick={() => {deleteCollection(d['pk'])}}>Delete Collection</button>
                        /*
                         <button css={cartButton} onClick={addToCart}>Add to 🛒</button>
                         <button css={buyButton} onClick={buyNow}>Buy Now!</button>
                         <button css={custButton} onClick={handleCustomize}>Customize</button>
                        */}
                        </div>
                        
                    </div>
                    <div key={d['name']} css={collectionName}>{d['name']}</div>
                    </div>
                );
            })}
        </div>
    )
}
export default CollectionResult;