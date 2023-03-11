import styled from "@emotion/styled";
import React, {useState, useEffect} from "react";
import { LoginForm, RegisterForm, SSOLogin } from "../components/LoginForm";
import {css} from "@emotion/react"
import { Layout } from "../components/Layout";
//import { ContactInfo } from "../components/ContactInfo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { getEmailToken } from "../Config/CookieHandler";
import { navigate } from "gatsby";

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
// const ContactInfoDiv = styled.div`
//   background-color: ${(props) => props.theme.colors.primary[900]};
//   padding: 1rem;
//   h3 {
//     color: ${(props) => props.theme.colors.grey[50]};
//   }
// `;
// const sidebyside = styled.div`
//   display: flex;
//   flex-direction:column;
  
// `;
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
const handleNavigate = ()=>{
  navigate('/')
}
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(getEmailToken())
  useEffect (() => {
    if (email){
      handleNavigate();
    }
  })
  return (
    <Layout>
      <LoginSection >
          {isLogin ? <LoginForm setSuccess={()=>handleNavigate()}/> : <RegisterForm setSuccess={()=>handleNavigate()}/>}
          {true ? <></> :<SSOLogin/>}
          
      </LoginSection>
      <section css={changeLogin}>
      <h3  onClick={() => setIsLogin(!isLogin)}>or <strong>{!isLogin ? "Login": "Register"}</strong> instead. </h3>
      </section>
        
      
      
    </Layout>
  );
};

export default Login;
