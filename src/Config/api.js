import axios from "axios";
export const hostT = "http://localhost:3000/"
export const host = "https://api.colorodysee.com/";

export const baseApi = axios.create({
  baseURL: host+"/",
  mode: "cors",
  timeout: 30000,
});
export const baseAuthenticatedApi = axios.create({
  baseURL: host+"/",
  mode: "cors",
  timeout: 5000,
});
export const loginAPI = axios.create({
  baseURL: host+"django-rest-allauth/token/login",
  mode: "cors",
  timeout: 5000,
})
export const RegisterAPI = axios.create({
  baseURL: host+"django-rest-allauth/token/createuser",
  mode: "cors",
  timeout: 5000,
})
export const ChangePasswordAPI = axios.create({
  baseURL: host+"django-rest-allauth/token/changepassword",
  mode: "cors",
  timeout: 5000,
})
export const EditUserAPI = axios.create({
  baseURL: host+"django-rest-allauth/token/edituser",
  mode:"cors",
  timeout: 5000,
})
export const LogOutAPI = axios.create({
  baseURL: host+"django-rest-allauth/token/logout",
  mode:"cors",
  timeout: 5000,
})
export const imageApi = axios.create({
  baseURL: host+"/",
  mode: "cors",
  timeout: -1,
});
export const EmailAPI = axios.create({
  baseURL: host+"send-mail",
  mode: "cors",
  timeout:5000,
})

