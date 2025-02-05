import axios from 'axios';

// const BaseUrl = 'https://kartapi.onrender.com/api';
const BaseUrl = 'http://localhost:4000/api';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDJmZjg0MzgyZTA3YzQ3MTUwNDJhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTk2Mjc0MywiZXhwIjoxNzEwMDQ5MTQzfQ.tBPqM_74s5oQQ4kCT1JVRzjcqdi7mgZYGxQ0h4T_e5s';

export const publicRequest = axios.create({
    baseURL: BaseUrl,
});

export const privateRequest = axios.create({
    baseURL: BaseUrl,
    header: {
        token: `${ Token }`
    },
});