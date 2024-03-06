import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";


const drawerWidth = 240; //este será el ancho del componente sidebar, so hay que restar ese ancho al total del navbar


export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display: 'flex'}}>
            <NavBar drawerWidth={drawerWidth}/>
            <SideBar drawerWidth={drawerWidth}/>
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3}}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}

/* eslint react/prop-types: 0 */