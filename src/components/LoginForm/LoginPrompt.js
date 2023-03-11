import React, { useState } from 'react';
import styled from "@emotion/styled";
import {LoginForm, RegisterForm, SSOLogin } from './index'

import {css} from '@emotion/react';
const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 5rem;
  }
`;
const changeLogin = css`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  strong {
    color: Blue;
  }
  strong: Hover {
    cursor: pointer;
  }
`;
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
const LoginPrompt = ({ collection, setSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    
    return (
        <>
            { showLogin ?<>
            <LoginSection>
                    {isLogin ? <LoginForm setSuccess={()=>setSuccess()}/> : <RegisterForm setSuccess={()=>setSuccess()}/>}
                    {true ? <></> : <SSOLogin />}
            </LoginSection>
            <section css={changeLogin}>
                <h3 onClick={() => setIsLogin(!isLogin)}>or <strong>{!isLogin ? "Login" : "Register"}</strong> instead. </h3>
            </section>
            </>
            :
            <button css={ButtonCSS} onClick={()=>setShowLogin(!showLogin)}>Save to Collections</button>
            }
            


        </>
    )
}
export default LoginPrompt;