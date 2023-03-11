import React, { useState } from "react";
import { css } from "@emotion/react";
import { getEmailToken, getSessionToken, setSessionCookie, } from "../Config/CookieHandler";
import { Layout } from "../components/Layout";
import AuthenticateUser from "../components/AuthenticateUser";
import { ChangePasswordAPI, EditUserAPI, loginAPI } from "../Config/api";
import { navigate } from "gatsby";
const EmailCSS = css`
margin-top: 3em;
background-color: #888;
border-radius: 4px;
display:flex;
flex-direction:column;
min-width: 15em;
min-height:3em;
align-items: center;
justify-content:center;
padding: 12px;
input {
    margin: 8px;
}
button {
    background-color: #c33;
    border-radius: 3px;
    padding: 3px;
}

`
const centeringBox = css`
display: flex;
flex-direction: row;
align-content: center;
align-items: center;
justify-items: center;
justify-content: center;
padding: 4px;
`
const verticalCenteringBox = css`
display:        flex;
flex-direction: column;
align-content:  center;
align-items:    center;
justify-items:  center;
justify-content: center;
min-height: 80vh;

`

const authenticateFloat = css`
min-width:100vw;
min-height:100vh;
background-color: rgba(230,230,230,.5);
position: absolute;
top: 3.5rem;
z-index:0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const DeleteCSS = css`
display: none;
`

const ProfilePage = () => {
    const [email, setEmail] = useState(getEmailToken());
    const [session, setSession] = useState(getSessionToken());
    const [isAuth, setIsAuth] = useState(false);
    const [recievedSession, setRecievedSession] = useState(null);
    const [notifying, setNotifying] = useState(false)
    const [failed, setFailed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({})
    let eeMail;
    let ppWord;
    const handleFieldChange = (event) => {
        if (isAuth)
        {
            const name=  event.target.name;
            const value = event.target.value;

            setInputs((values) => ({ ...values, [name]:value}));
            console.log("name",name)
            console.log("value",value)
        }
            
    }
    const ValidateSession = () => {
        //console.log("recieved Session", recievedSession);
        return session === recievedSession;
    }
    const handleConfirm = () => {

    }
    
    const notifyUser = () => {
        if (notifying)
            setNotifying(false);
        setNotifying(true);
    }
    const authUser = () => {
        if (!isAuth) {
            notifyUser();
        }
    }

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        const name = inputs['email'].split('@')[0];
        const em = {"email": inputs['email'],"username":name}

        const response = EditUserAPI.patch("",em,{
            headers:
            {
              'Authorization': 'Token ' + session,
    
            },}).then(()=>{
                const logdetails = {"email":inputs['email'], "password":inputs['old_password']};
                const res = loginAPI.post("", logdetails).then((req)=>{
                    console.log(req);    
                    setSessionCookie(req.data['token'], req.data['email'])
                   navigate(-1);
                });
        });
    }

    const changeRecievedSession = (data) => {
        console.log(data, session)
        if (data === session) {
            
            setIsAuth(true);
            setNotifying(false);
        } 


    }
    const handleDeleteAccount = ()=>{

    }
    const handlePasswordSubmit = async (event) => {
        event.preventDefault()
        
        const response = ChangePasswordAPI.post("", inputs,{
            headers:
            {
              'Authorization': 'Token ' + session,
    
            },}).then((req) => {
            console.log(req.data);
           
            const logdetails = {"email":getEmailToken(), "password":inputs['new_password']};
            const res = loginAPI.post("", logdetails).then((req)=>{
                console.log(req);    
            setSessionCookie(req.data['token'], req.data['email'])
                navigate(-1);
            });
            
        }).catch((req)=>{
            console.log(req);
            
        })
    }
    
    const pw = (pass) =>{
        console.log()
        setInputs((values) => ({...values, ['old_password']:pass}))
    }
    
    //console.log("wtf");
    //console.log(notifying)
    return (
        <Layout>

            <div css={centeringBox}>
                <div css={verticalCenteringBox}>
                    {notifying ?
                        <div css={authenticateFloat}>
                            <AuthenticateUser getData={(data) => changeRecievedSession(data)} setNotify={notifyUser} pw={(pass)=>{pw(pass)}} />
                        </div>
                        : ""}
                                                {isAuth && isOpen ?
                        "Thank you for verifying your identity" : ""}
                    <form method={"POST"} onClick={authUser} css={EmailCSS}>
                        <div>Change your Password</div>
                        <input type={"password"} name={"new_password"} onChange={handleFieldChange}/>
                        <button type={"submit"} onClick={handlePasswordSubmit}>Submit</button>
                    </form>

                    <form method={"POST"} onClick={authUser} css={EmailCSS}>
                        <div>Change your Email</div>
                        <input  name={"email"} onChange={handleFieldChange} />
                        <button type={"submit"} onClick={handleEmailSubmit}>Submit</button>
                    </form>
                    <form method={"Post"} onClick={authUser}>
                        <button css={DeleteCSS} type={"submit"} onClick={handleDeleteAccount}>Delete Account</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default ProfilePage;