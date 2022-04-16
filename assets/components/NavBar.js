import { AppBar, Box, Button, Drawer, List, ListItem,ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
const NavBar = ({page})=>{

    const [openDrawer, setOpenDrawer] = useState(false);
    const pages = ['trips', 'reservations', 'travelers'];
    return(
        <>
        <Drawer
            anchor='left'
            open={openDrawer}
            onClose={
                ()=>{
                    setOpenDrawer(!openDrawer)
                }
            }
        >
            <List>
                {
                    pages.map(
                        item =>{
                           return  item === page ? 
                            (<ListItem button key={item}>
                                <ListItemText primary={item} />
                              </ListItem>):
                            (<ListItem button key={item}>
                                <ListItemText primary={item} />
                              </ListItem>)
                        }
                    )
                }
            </List>
        </Drawer>
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1,  display: {md:'flex',sm:'none', xs:'none',xl:'flex'} }}>
                        <Typography variant="h2">Sun Trips!</Typography>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: {md:'flex',sm:'none', xs:'none',xl:'flex'}}} />

                    <Box sx={{flexGrow: 1, display: {md:'flex',sm:'none', xs:'none',xl:'flex'},flexDirection: 'row-reverse'}}>
                        {
                            pages.map(
                                item =>(<Box sx={{m:2}}>
                                            <Button  sx={{color:item === page ? 'red' :'inherit'}}variant="outlined" m={1} href={`/${item}`} color="secondary">{item}</Button>
                                        </Box>)
                            )
                        }
                        
                    </Box>   
                    <Box sx={{flexGrow: 1, display: {md:'none',sm:'flex', xs:'flex',xl:'none'},flexDirection: 'row'}}>
                    <IconButton
                        edge="start"
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={
                            ()=>setOpenDrawer(!openDrawer)
                        }
                    >
                        <MenuIcon />
                    </IconButton>
                    </Box>        

                    <Box sx={{ flexGrow: 1,  display: {md:'none',sm:'flex', xs:'flex',xl:'none'},flexDirection: 'row', justifyContent:'center' }}>
                        <Typography variant="h6">Sun Trips!</Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: {md:'none',sm:'flex', xs:'flex',xl:'none'}}} />
                                
                </Toolbar>
            </AppBar>

           
        </Box>
        </>
    )
}

export {NavBar};