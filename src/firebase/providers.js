import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


//Aqui va config de todos los proveedores de auth
const googleProvider = new GoogleAuthProvider(); 

export const singInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result ); //esta line nos trae los datos de auth del user, podemos sacar el token par alo que necesitemos
        const {displayName, email, photoURL, uid} = result.user; //con esto nos capturamos los datos de usuario autentificado, como el acess token, el uid, url de la foto, etc
        
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        
        // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

        return {
            ok: false,
            errorCode, errorMessage, 
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        console.log(resp);
        //TODO: actualizar el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser,  {displayName});

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailPassword = async({email, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

        
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
        
    }

}
