import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
            
        >
            <Grid
                item
                className="box-shadow animate__animated animate__fadeIn animate__slow" //con esto podemos agregar estilos desde nuestro archivo styles
                xs={3} //esto e spara decirle cuantas columnas debe ocupar en pantallas muy pequeñas, en este caso 3 - mobile first, para medianas es sm, md
                sx={{ width:{ sm: 450}, backgroundColor: 'white', padding: 3, borderRadius: 2 }} //esto es para agregar estilos en línes
            >
                <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>

                {/* este children va traer a este layout los elementos propios ya sea login o register segun correponda */}
                {
                children
                }

            </Grid>

        </Grid>
    )
};

/* eslint react/prop-types: 0 */

