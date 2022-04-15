import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

import { useHistory } from "react-router-dom";
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';
import { useParams } from 'react-router-dom';





const EditTrip = ()=>{

    const [trip,setTrip] = useState(null);
    const {idTrip} = useParams()
    console.log(idTrip);
    const history = useHistory()

    const [form,setForm] = useState(
        {
                'destination':'',
                'placesNumber':0,
                'origin':'',
                'price':''
        }
    )
 
    


    const fetchLocations = async ()=>{
        const result = await axios.get(`/api/trip/${idTrip}`);
        return result.status===200 ? result.data.trips : null
    }

    const editRequest = async ()=>{
        const result = await axios.post('/api/trip/edit',
        {data: form}
        )
        console.log(result)
        if (result.status === 200) {
            history.push("/trips");
        } else {
            
        }
    }

    

    return (
        <>
            <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
                <NavBar />
                <Toolbar/>
                <Box sx={{backgroundColor:'#F7E2C3', flexDirection:'row',display:'flex',width:'100%',height:'70vh' }}>
                    <Box p={3} sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center'}}>
                        <Paper m={3} p={2} sx={{padding:6,width:'50%', height:'80%'}}>
                            
                            <Box sx={{display:'flex', flexDirection:'row'}}>
                                <Box sx={{width:'50%', display:'flex'}}>
                                    <Typography variant="h4">Edit Trip</Typography>
                                </Box>
                                
                            </Box>
                            
                        </Paper>
                    </Box>

                
                </Box>
                <Footer/>
            </Box>
        </>
        
    )
}


export {EditTrip};


