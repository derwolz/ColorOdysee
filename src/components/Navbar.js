import { css } from "@emotion/react";
//import { Link } from "gatsby";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { DesktopNavbar } from "./DesktopNavbar";
import { Logo } from "./Logo";
import { MobileNavbar } from "./MobileNavbar";
import { navigate } from "gatsby";
//import { NavbarLinks } from "./NavbarLinks";

const navbarContainer = css`
   position: sticky; 
   top: 0; 
  padding: 0rem 1rem;
  /* width: 100%; */
   z-index: 200; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsla(0, 0%, 60%, 0.7);
  /* background: transparent; */
  border-bottom: 3px solid #a6a6a6;
  img {
    padding-left: 0rem;
  }
`;
const logoCSS = css`
&:hover {
  cursor: pointer
}
`
export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const goHome = () => {
    navigate('/');
  }
  return (
    <>
      <div css={navbarContainer}>
        <div onClick={goHome} css={logoCSS}><Logo width={180} /></div>
        
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        {/* <DesktopNavbar /> */}
      </div>
    </>
  );
};
