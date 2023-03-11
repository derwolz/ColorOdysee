import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";
//import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

//cyan theme
const theme = {
  colors: {
    primary: {
      50: "#ffeeff",
      100: "ffccff",
      200: "#ffDEee",
      300: "#ffD0cc",
      400: "#ffaabb",
      500: "#ff99aa",
      600: "#f77887",
      700: "#e75643",
      800: "#d77788",
      900: "#c94554",
      A100: "#84FFFF",
      A200: "#18FFFF",
      A400: "#00E5FF",
      A700: "#00B8D4",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
};
const metaLayout = css`
display:flex;
flex-direction: column;
align-content: space-between;
height: 100vh;
width:100%;
`;
// const metafooter = css`
// margin-top: auto
// `;
const metaBody = css`
margin-bottom: auto
`;
export const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            width: 100%;
            height: 100%;
            background-color: #c8cac3;
            margin: 0;
            padding: 0;
            overflow-x: hidden;

            
          }
          ::-webkit-scrollbar {
            width: 7px;
          }

          ::-webkit-scrollbar-track {
            background: hsl(0, 0%, 25%);
          }

          ::-webkit-scrollbar-thumb {
            background: hsl(195, 97%, 24%);
            border-radius: 0.5rem;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          button {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
          }
        `}
      />
      <ThemeProvider theme={theme} >
        <div css={metaLayout}>

        
        <Navbar />
        <div css={metaBody}>
            {children}
        </div>
        
        </div>
      </ThemeProvider>
    </>
  );
};
