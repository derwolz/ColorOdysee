import { css } from "@emotion/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, navigate } from "gatsby";
//import { NavbarLinks } from "./NavbarLinks";
import { BsChevronLeft } from "react-icons/bs";
import styled from "@emotion/styled";
//import * as ScrollArea from '@radix-ui/react-scroll-area'
import { getEmailToken, deleteSessionToken } from "../Config/CookieHandler";
const bars = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0.5rem; */
  gap: 0.5rem;
`;

// const allLinksWrapper = css`
//   display: flex;
//   gap: 1rem;
//   padding-right: 1.5rem;
//   font-weight: 500;
//   /* h5 {
//     color: white;
//     font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//       "Lucida Sans", Arial, sans-serif;
//     font-size: calc(30 + 2vmin);
//     opacity: 150%;
//     @media (min-width: 1200px) {
//       font-size: 1.1rem;
//     }
//     &:hover {
//       opacity: 0.8;
//     }
//   } */
//   a {
//     text-decoration: none;
//     color: white;
//     font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//       "Lucida Sans", Arial, sans-serif;
//     font-size: calc(30 + 2vmin);
//     opacity: 150%;
//     @media (min-width: 1200px) {
//       font-size: 1.125rem;
//     }
//     &:hover {
//       opacity: 0.8;
//     }
//   }
// `;
// const SamplesDiv = styled.h5``;


const Menuclose = css`
width: 40%;
background-color: #111;
opacity: .2;
`
const MobileMenu = css`
width: 60%;
background-color: #888f;
opacity: .9;
z-index: 999;
display: flex;
flex-direction: row;

justify-content: center;
margin-right: 00px;
border-radius: 3px;
`
const MenuWrapper = css`
Display: flex;
flex-direction: column;
margin-right: 10px;
`
const MenuItem = css`
text-decoration: none;
margin-top: 20px;
font-size: 20px;
color: white;
`

const MenuBox = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 9999;
  left: 0%;
  position: absolute;
  top:106%;
  justify-content:flex-end;
  height: 94vh;
  width: 100vw;
  :hover {
    cursor: pointer;
  }
`;
const bar = css`
  height: 1px;
  width: 30px;
  background-color: white;
`;
export const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(getEmailToken());
  const [isLoggedin, setIsLoggedIn] = useState(() => {
    //console.log(email);
    if (email === undefined)
      return false;
    return true;
  })
  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const navigateHandler = (url) => {
    //   event.preventDefault();
    navigate(url);
  };
  return (
    <div css={bars} onClick={handleClick}>
      <motion.span
        initial={{ x: 0, opacity: 1 }}
        animate={isClicked ? { rotate: 45, y: 9 } : { x: 0, opacity: 1 }}
        css={bar}
      />
      <motion.span
        initial={{ x: 0, opacity: 1 }}
        css={bar}
        animate={isClicked ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{}}
      />
      <motion.span
        initial={{ x: 0, opacity: 1 }}
        animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
        css={bar}
      />
      {isClicked ? <div css={MenuBox} style={{zIndex:'9999'}}>
        <div css={Menuclose} onClick={handleClick}>
        </div>

        <div css={MobileMenu} style={{zIndex: '9999'}}>
          <div css={MenuWrapper}>
            <Link to="/" css={MenuItem}>Home</Link>
            {isLoggedin ? <>
              <Link to="/Profile/#" css={MenuItem}>Profile</Link>
              <Link to="/Collections/#" css={MenuItem}>Collections</Link>

              <a href="" css={MenuItem} onClick={() => {
                deleteSessionToken();
              }}>Logout</a>

            </>
              :
              <Link to="/login" css={MenuItem}>Login</Link>
            }

            <Link to="/about" css={MenuItem}>About</Link>
            <Link to="/contact" css={MenuItem}>Contact Us</Link>
          </div>
        </div>
      </div>
        : ""

      }
    </div>



  );
};
