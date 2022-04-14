import React from 'react';
import { Box ,useMediaQuery} from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from '../assets/sunTrips.jpg'
import ImageMobile from "../assets/sunTripsMobile.jpg";
import ImageXS from "../assets/sunTripsXS.jpg";

const Background1 = ()=>{


    const theme = useTheme();
    const isSmallOrLess = useMediaQuery(theme.breakpoints.down('md'));
    const medium = useMediaQuery(theme.breakpoints.only('md'));
    const big = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const biger = useMediaQuery(theme.breakpoints.up('xl'));
    const setImage = ()=>{
        if (isSmallOrLess) {
            return ImageXS;
        }
        if(medium){
            return ImageMobile;
        }

        if(big || biger ){
            return Image;
        }
    }

    return (
        <>
        <Box sx={{height:'100vh', position: 'absolute',top:20,display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden',width:'100%'}}>
            <img src={setImage()} style={{zIndex:5,position:'absolute', width:'100%', height:!medium? '100%': undefined }}/>
        </Box>
        </>
    )
}

export {Background1};


