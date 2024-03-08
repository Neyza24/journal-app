
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterUserWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [value => value.includes('@'), 'El correo debe tener una @.'],
    password: [value => value.length >= 6, 'El password debe tener más de 6 letras.'],
    displayName: [value => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {
    
    const {status, errorMessage} = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const [ formSubmitted, setFormSubmitted] = useState(false);
    const dispatch = useDispatch();

    const {formState, displayName, email, password, onInputChange, 
        isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

    // console.log(isFormValid, displayNameValid, emailValid, passwordValid);

    const onSubmit = (event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if( !isFormValid ) return;
        dispatch(startRegisterUserWithEmailPassword(formState));

    }
    

    return (
        <AuthLayout title="Register">
            <h1>FormValid { isFormValid ? 'Valido': 'incorrecto'}</h1>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted} //la doble !! convierte en un booleano
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={12} display={!errorMessage && 'none'}>
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button 
                                type="submit" 
                                variant="contained" 
                                fullWidth 
                                disabled={isCheckingAuthentication}
                            >
                                Crear cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link color='inherit' to='/auth/login' component={RouterLink}>
                            Iniciar sesión
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    )
}

