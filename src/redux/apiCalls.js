import { loginStart, loginSuccess, loginFailure } from "./userRedux"
import { publicRequest } from "../requestMethods"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/users/firebase-auth", {
            name: user.displayName || "User",
            email: user.email,
            firebaseUid: user.uid,
            avatar: user.photoURL || ""
        });
        dispatch(loginSuccess(res.data.user));
        return { auth: true, message: "Authentication successful", token: res.data.token };
    } catch (err) {
        console.log(err);
        dispatch(loginFailure());
        return { auth: false, message: err.response.data };
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/users/firebase-auth", {
            name: user.displayName || "User",
            email: user.email,
            firebaseUid: user.uid,
            avatar: user.photoURL || ""
        });
        dispatch(loginSuccess(res.data.user));
        return { auth: true, message: "Registration successful", token: res.data.token };
    } catch (err) {
        console.log(err);
        dispatch(loginFailure());
        return { auth: false, message: err.response };
    }
}