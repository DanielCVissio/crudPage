import { Box } from "@mui/material"
import { NavBar } from "../../components/NavBar";
import { SideBar } from "../../components/SideBar";

const DWidth = 300;

export const CrudLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>
        <NavBar DWidth={DWidth}/>

        <SideBar DWidth={DWidth}/>

        
        <Box
            component='main'
            sx={{flexGrow:1}}
        >
            {/* Toolbar */}

            { children }
        </Box>
    </Box>
  )
}
