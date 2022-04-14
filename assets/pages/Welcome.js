import { Box, Typography ,useMediaQuery} from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Background1 } from '../components/Background1';

const Welcome = ()=>{


    return (
        <>
       <Background1 />
        
        <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
             <NavBar/>
             
             <Box sx={{flexGrow:1, backgroundColor:'transparent',display:'flex', flexWrap:'wrap',justifyContent:'center', alignItems:'center',  width:'100%',minHeight:'100vh' }}>
                
                <Box>
                    <Typography>Hey jude</Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
       </>
    )
}

export {Welcome};