import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import styled from "@emotion/styled";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/react";
import { getEmailToken, deleteSessionToken } from "../Config/CookieHandler";
const allLinksWrapper = css`
  display: flex;
  gap: 1rem;
  padding-right: 1.5rem;
  font-weight: 500;
  
  /* h5 {
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: calc(30 + 2vmin);
    opacity: 150%;
    @media (min-width: 1200px) {
      font-size: 1.1rem;
    }
    &:hover {
      opacity: 0.8;
    }
  } */
  a {
    text-decoration: none;
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: calc(30 + 2vmin);
    opacity: 150%;
    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

// const SamplesDiv = styled.h5``;

// const DropdownItemLabel = styled(DropdownMenu.Label)`
//   color: ${(props) => props.theme.colors.primary.main};
//   :hover{
//     background-color: ${(props) => props.theme.colors.grey["500"]}
//   }
// `;

const flex = css`
  display: flex;
  align-items: center;
  background-color: inherit;
`;
const DropdownMenuItem = styled(DropdownMenu.Item)`

padding: 10px 10px 10px 10px;
:hover{
  background-color: ${(props) => props.theme.colors.grey["500"]}
}

`;

const DropdownMenuContent = styled(DropdownMenu.Content)`
margin-top: 10px;
  background-color: ${(props) => props.theme.colors.grey["50"]};
  overflow: hidden;
border-radius: 3px;
  :hover {
    cursor: pointer;
    
  }
`;

export const DesktopNavbar = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(getEmailToken());
  const [isLoggedin, setIsLoggedIn] = useState( () => {
    
    
    //console.log(email);
    if (email === undefined)
      return false;
    return true;

  })
  
  const navigateHandler = (url) => {
    //   event.preventDefault();
    navigate(url);
  };
  return (
    <div css={allLinksWrapper}>
      <Link to="/">Home</Link>
    {isLoggedin ? 
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div css={flex} onMouseEnter={() => setOpen(true)}>
            <a>{email}</a>
            <BsChevronLeft color="white" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => {
            navigateHandler("/Profile/#");
          }}>Profile</DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/Collections/#");
            }}
          >
            Collections
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              deleteSessionToken();
              navigateHandler("/");
              window.location.reload();
            }}
          >
            Logout
          </DropdownMenuItem>
          
          
        </DropdownMenuContent>
      </DropdownMenu.Root>
        :<Link to="/login">Login</Link>}
        
        <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
