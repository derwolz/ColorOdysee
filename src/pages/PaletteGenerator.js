import React, {useEffect} from "react";
import { Layout } from "../components/Layout";
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {ImageForm} from "../components/ImageForm";
import { getEmailToken } from "../Config/CookieHandler";
import { navigate } from "gatsby";
// const hero = css`
//   margin-top: 17%;
//   strong {
//     font-size: calc(9vmin);
//     /* position: relative;
//     top: calc(5.3vmin); */
//     color: #fff;
//     text-shadow: 0 0 1vmin #fff;
//     text-shadow: 0 0 2vmin #fff;
//     text-shadow: 0 0 3vmin #fff;
//     text-shadow: 0 0 4vmin #eee;
//     text-shadow: 0 0 5vmin #ddd;
    
//   }
// `;

// const projectPortalButton = ({ theme }) => css`
//   padding: 1rem;
//   font-size: 1.1rem;
//   &:hover {
//     cursor: pointer;
//     box-shadow: none;
//   }
// `;
const mainBox = css`
width:100vw;
padding-top: 10vh;
display:flex;
flex-direction: column;
align-items: center;

`


// const FileUpload = css`
//   display: flex;
//   flex-direction: column;
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//     "Lucida Sans", Arial, sans-serif;
//   max-width: 30ch;
//   color: white;
// `;


// const handleStart = ()=> {
  
// }

export const Head = () => (
  <>
    <title>Palette Builder</title>
    <meta name="AI Color Story Generator" content="Let's start your color story" />
  </>
);

const PaletteGenerator = () => {
  const isMobile = useMediaQuery("(min-width: 900)");
  useEffect(() =>{
    const email = getEmailToken();

  })
  return (
    <Layout>
      <main>
        <section>
          <div css={mainBox}>
          <ImageForm/>
          </div>
          
          </section>
      </main>
    </Layout>
  );
};

export default PaletteGenerator;
