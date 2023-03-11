import Cookies from "universal-cookie";
import React from "react";
const cookies = new Cookies();
export const setSessionCookie = (token, email) => {
    
   cookies.set("name", "mAI")
    cookies.set("email",email, {path: '/', SameSite: "None", secure:true})
    cookies.set("session",token, {path: '/', SameSite: "None", secure:true})
    
    //cookies.set("session="+ token + "; SameSite=None; Secure;path='/login'");
    //cookies.set("email="+email+"; SameSite=None; Secure;path=/login'");

}
export const getSessionToken = () => {
    return cookies.get("session");
}
export const getEmailToken =() => {
    return cookies.get("email");
}

export const deleteSessionToken = () => {
    cookies.remove("session");
    cookies.remove("email");
}
export const getCSRFToken = () =>{
    return cookies.get("csrftoken")

}
