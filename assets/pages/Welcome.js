import { Box, Button, Typography ,useMediaQuery} from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Background1 } from '../components/Background1';
import FirstCardImage from '../assets/roadTrip.jpg'

const Welcome = ()=>{


    return (
        <>
       <Background1 />
        
        <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
             <NavBar/>
             
             <Box  sx={{ backgroundColor:'transparent', flexDirection:'row',display:{xs:'none',sm:'none', md:'flex', lg:'flex', xl:'flex'}, flexWrap:'wrap', alignItems:'center',zIndex:25,  width:'100%',minHeight:'100vh' }}>
                <Box pl={3} sx={{display:'flex', flexDirection:'column'}}>
                <Typography variant='h1' textAlign="left">Manage <br/> your turist services</Typography>
                <br/>
                <Button mt={5} variant="contained" color="darkPrimary">Getss Started</Button>
                </Box>
               
            </Box>
            <Box  sx={{ backgroundColor:'transparent',flexDirection:'row',display:{xs:'flex',sm:'flex', md:'none', lg:'none', xl:'none'}, flexWrap:'wrap', alignItems:'flex-end',zIndex:25,  width:'100%',minHeight:'100vh' }}>
                <Box pl={3} pr={3} sx={{display:'flex', flexDirection:'column',}}>
                <Typography variant='h1Mobile' textAlign="center">Manage your turist services</Typography>
                <br/>
                <Button mt={5} variant="contained" color="darkPrimary" href="/sites">Get rrStarted</Button>
                </Box>
               
            </Box>
            <Footer/>
        </Box>
       </>
    )
}

export {Welcome};