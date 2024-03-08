import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
};

export const startGoogleSignIn = () => {
    return async( dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();

        if( !result.ok) return dispatch( logout(result.errorMessage));

        dispatch( login(result));
        
    }
}

export const startRegisterUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        // console.log('soy la respuesta en el thunk de register',resp);
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch( login({uid, displayName, email, photoURL}));
    }

}
