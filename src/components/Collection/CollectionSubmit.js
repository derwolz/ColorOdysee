import React, { useState } from 'react'
import { css } from '@emotion/react'
import { baseApi } from '../../Config/api';
import { getSessionToken } from '../../Config/CookieHandler';
import { navigate } from 'gatsby';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import PaletteNamer from './Palettenamer';
import LoginPrompt from '../LoginForm/LoginPrompt';
const ButtonCSS = css`
width: 6em;
height: 3em;
background-color: #f88;
display: flex;
flex-flow: column;
align-items: center;
justify-content:center;
border-radius: 3px;
box-shadow: 3px 3px;
margin: 4px 4px 4px 4px;
&:hover {
    box-shadow: 0px 0px;
}
`
// const BuyCSS = css`
// width: 6em;
// height: 3em;
// background-color: #dd4;
// display: flex;
// flex-flow: column;
// align-items: center;
// justify-content:center;
// border-radius: 3px;
// `
// const CartCSS = css`
// width: 6em;
// height: 3em;
// background-color: #eee;
// display: flex;
// flex-flow: column;
// align-items: center;
// justify-content:center;
// margin: .6rem;
// border-radius: 3px;
// `
// const StoreButtons = css`
// display: flex;
// margin-left: 2em;
// flex-flow: column;
// justify-content: center;
// align-items: center;
// max-width: 300px;
// `
const handleNavigate = () => {
    navigate('/Collections');
}
const CollectionSubmit = ({ products }) => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [collectionBool, setCollectionBool] = useState(false);
    let PName = "";
    const handleChangeName = (nam) =>{
        console.log(nam)
        PName = nam;
    }
    const handleSubmit = () => {
        const arr = [];
        console.log(PName);
        products.forEach((x) => {
            //console.log('name', x['name']);
            arr.push(x['pk']);
        })
        const stoken = getSessionToken();
        const data = new FormData()
        data.append('owner', 1);
        data.append("palette", arr)
        data.append('name',PName);
        baseApi.post("collections/", data, {
            headers:
            {
                'Authorization': 'Token ' + stoken,
                'Content-Type': 'multipart/form-data',

            }
        }).then(() => {
            handleNavigate();
        });
    }
    const handleBuy = () => {
        console.log("buy items");
    }
    const handleCart = () => {
        console.log("items added to cart")
    }
    const getIsMobile = () => {
        if (isMobile) {
            return { flexDirection: "row" }
        }
    }
    const processForm = (arg) =>{
        //console.log("shut down processForm", arg)
        if (arg)
            handleSubmit();
        else
            setCollectionBool(false);
    }
    const toggleCollectionBool = ()=>{
        if (collectionBool)
          setCollectionBool(false);
        setCollectionBool(true);
      }
    const SuccessfulLogin =() =>{
        toggleCollectionBool()
        console.log('products', products);
    }
    return (<> 

        {getSessionToken() == undefined ?
        <LoginPrompt setSuccess={()=>{SuccessfulLogin()}}/>  :
            <div css={ButtonCSS} >
                <button onClick={toggleCollectionBool}>
                    Save to Collections
                </button>
            </div>
             
    }
        {/*    <div css={CartCSS} >
                <button onClick={handleCart}>
                    Add to 🛒
                </button>
            </div>
            <div css={BuyCSS} >
                <button onClick={handleBuy}>
                    Buy Now!
                </button>
            </div>
    */}
        {collectionBool ?
            <PaletteNamer setPaletteName={(arg) => { handleChangeName(arg) }} deleteMe={(arg) => processForm(arg)} />
            : ""}
    </>
    );
};
export default CollectionSubmit;