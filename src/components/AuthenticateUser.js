import React, { useEffect, useState, useRef } from "react"
import { css } from "@emotion/react"
import { loginAPI } from "../Config/api"
import { getEmailToken } from "../Config/CookieHandler"
const AuthenticateCSS = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: grey;
border-radius: 3px;
padding: 4px 4px 4px 4px;
`
const submitButton = css`
min-width: 3em;
min-height: 1em;
background-color: #a33c3c;
border-radius: 3px;
margin: 4px 4px 4px 4px;

`
const formCSS = css`
display: flex;
flex-direction: column;
align-items: center;
`
const AuthenticateUser = ({getData, setNotify, pw}) => {
    const pInput = useRef(null)
    const [inputs, setInputs] = useState({})
    const [failed, setFailed] = useState(false);
    const[p, setP] = useState("");
    const handleConfirm = async (event) =>{
        event.preventDefault()
        console.log(event);
        console.log('here')
        //console.log("inputs", inputs)
        const response = loginAPI.post("", inputs).then((req) =>{
            console.log(req.data);
            if (req.data['token']){
                getData(req.data['token']);
            }
            pw(inputs["password"]);
            
        }).catch((req) => {
            console.log(req);
            getData('failed to authenticate user');
            setFailed(true);
        })
    }
    useEffect(()=>{
        pInput.current.focus();
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
        setInputs((values) => ({...values, ['email']: getEmailToken()}))
      };
    const handleLoseFocus = (event) => {
        
    }
    return (
        <div css={AuthenticateCSS} onClick={handleLoseFocus}>
            In order to proceed you need to authenticate your identity<br /><br/>
            Please enter your password<br/><br/>
            <form method={"Post"} css={formCSS}>
                {!failed? "":<>Wrong Password <br/><br/></>}
                <input ref={pInput} type={"password"} name={"password"}  onChange={handleChange} style={{borderColor:!failed ? 'black': 'red'}}/><br/>
                <button type={"submit"} css={submitButton} onClick={handleConfirm}>confirm</button>
            </form>
        </div>
    );
}
export default AuthenticateUser;
