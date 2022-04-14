import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';
import Image from '../assets/sunTrips.jpg'
import { Footer } from '../components/Footer';

const Welcome = ()=>{
    return (

        <Box sx={{ bgcolor: 'black', width:'100%'}} >
             <NavBar/>
             
             <Box sx={{flexGrow:1, display:'flex', justifyContent:'center',backgroundRepeat:'no-repeat', alignItems:'center', height:'100vh',backgroundSize:'cover',  width:'100%', backgroundImage:`url(${Image})`}}>
                
                <Box>
                    <Typography>Hey jude</Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
       
    )
}

export {Welcome};