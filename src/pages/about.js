import React, { useEffect, useState } from "react";
import { baseApi } from "../Config/api";
import ProductPage from "../components/ProductPage";
import { css } from "@emotion/react";
import { Layout } from "../components/Layout";
const StorePage = css`
display: flex;
flex-flow: column;
align-content: center;
align-items: center;
justify-items: center;
justify-content: center;

`
const selection = css`
display: flex;
flex-flow: row;
width:20em;
justify-content: space-between;
`
const getProducts = async (num) => {
    const url = "cosmetics/?page="+num
    //console.log(url)
    const response = await baseApi.get(url).then(
        (result)=> {
            return result;
        }
    )
    return response.data
}

const About = ({}) =>{
    const[productResponse, setProductResponse] = useState(null);
    const [pIndex, setpIndex] = useState(0);
    const getNext = () =>{
        setpIndex(pIndex+1);
        refreshProducts();
    }
    const getPrev = () => {
        setpIndex(pIndex -1);
        refreshProducts();
    }
    const refreshProducts= () => {
        setProductResponse(null)
        getProducts(pIndex).then((d) => {
            setProductResponse(<ProductPage products={d}/>);
        })
    }
    useEffect(()=> {
        refreshProducts();
    },[]);
    
    return (
        <Layout>
            
            <div css={StorePage}>
                <h1>mAI The Makeup AI</h1>
                <h2 style={{width: 60+"vw"}}>
                In order to show you the power of the AI system, We needed to have a database filled with colors, finishes, and images. Listed below is every product in our virtual catalog that we draw from for the AI.
                </h2>
                <div css={selection} style={{display:'none'}}>
                {pIndex > 0?<button onClick={getPrev}>{"<"}</button>:"" }<button onClick={getNext}>{">"}</button>
                </div>
                {productResponse}
            </div>
        </Layout>
    );
}
export default About;