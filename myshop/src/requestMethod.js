import Axios from "axios";


const BASE_URL="http://localhost:3001/api";

const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWFiMjQ4NzcyNzE2OTVhYTI5Y2Q4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzYzMzcxNiwiZXhwIjoxNjU3ODkyOTE2fQ.OlOeGYyJA0xyH-myn7-QPlSF1AvK3YMpXkxVjtmMUBA";

export const publicRequest=Axios.create({
    baseURL:BASE_URL,
});

export const userRequest=Axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`},
});


