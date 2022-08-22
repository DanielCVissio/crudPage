import { Grid} from "@mui/material"


export const AuthLayout = ({children}) => {
  return (
    <Grid
    container
    spacing={0}
    direction={'column'}
    justify={'center'}
    alignItems={'center'}
    sx={{minHeight: '100vh', padding:4}}
    
  >

    <Grid item
      xs={3}
      sx={{
        width:{sm:450},
        background:'white', 
        padding:3, 
        borderRadius:2
        }}>
      { children }
    </Grid>
  </Grid>
  )
}

// Layout que se une en el loginComponent