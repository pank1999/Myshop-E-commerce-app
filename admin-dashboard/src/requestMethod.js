import Axios from "axios";


const BASE_URL="http://localhost:3003/api";
const currentUser=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

const Token=currentUser == null ? " ":JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest=Axios.create({
    baseURL:BASE_URL,
});

export const userRequest=Axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`},
});


