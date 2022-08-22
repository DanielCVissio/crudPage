import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({DWidth}) => {
  return (
    <Box
        component='nave'
        sx={{width: {sm:DWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
            variant='permanent' //temporary
            open
            sx={{
                display:{sx:'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DWidth}
            }}
        >  
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Dany
                </Typography>
               
            </Toolbar>
                <Divider/>
                <List>
                    {['Enero'].map(text=>(
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText primary={'Crud'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
        </Drawer>

    </Box>
  )
}
