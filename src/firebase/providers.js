import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorCode, errorMessage, 
        }
    }
}

//esta función la vamos a mandar a llamar desde nusto thunk de auth 