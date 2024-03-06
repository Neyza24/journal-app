import { checkingCredentials } from "./authSlice";


//este thunk debe despachar estos dos argumentos email, password
export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
};

export const startGoogleSignIn = () => {
    return async( dispatch) => {
        dispatch(checkingCredentials());
    }
}
