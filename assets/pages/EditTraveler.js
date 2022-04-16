import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { TravelerForm } from './Forms';
import { Box } from '@mui/system';
import { Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';





const EditTraveler = ()=>{
    const {idTraveler} = useParams();
    const [initial,setInitial]=useState(null);
   

    useEffect(
        async ()=>{
            const value = await fetchTraveler()
            setInitial(value[0]);
        },
        []
    )

    const updateRequest = async (values, { setSubmitting })=>{
        const result = await axios.post(`/api/updateTraveler/${idTraveler}`,
            {values}
        )
        setSubmitting(false);
        if (result.status === 200) {
            window.history.back();
        } 
    }

    const fetchTraveler = async ()=>{
        let result;
        try {
            result = await axios.get(`/api/traveler/${idTraveler}`);
        } catch (error) {
            console.log(error)
        }
        return result.status===200 ? JSON.parse(result.data) : null
    }

    

    return (
        <>
            <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
                <NavBar />
                <Toolbar/>
                <Box sx={{backgroundColor:'#F7E2C3', flexDirection:'row',display:'flex',width:'100%',height:'70vh' }}>
                    <Box p={3} sx={{width:'100%', flexWrap:'wrap', display:'flex', justifyContent:'center'}}>
                        <Paper m={3} p={2} sx={{padding:6,width:'50%',justifyContent:'center',alignItems:'center', display:'flex', flexWrap:'wrap'}}>
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                    <Typography variant="h4">Edit Traveler</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                {
                                    initial !== null ? (
                                        <TravelerForm  initialValues={initial} 
                                            
                                            actionSubmit={
                                                updateRequest
                                            }
                                        />
                                    ):(
                                        <Typography>Waiting</Typography>
                                    )
                                }
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


export {EditTraveler};


