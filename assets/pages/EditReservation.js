import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ReservationForm } from './Forms';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';





const EditReservation = ()=>{


    const [trips,setTrips] = useState(null);
    const [travelers,setTravelers] = useState(null);

    useEffect(
        ()=>{
            const fetchTrips = async ()=>{
                let result;
                try {
                    result = await axios.get('/api/tripAvailable');
                    setTrips(result.status===200 ? JSON.parse(result.data) : null)
                } catch (error) {
                    console.log(error)
                }
            }
            const fetchNames =  async()=>{
                let result;
                try {
                    result = await axios.get('/api/names');
                    setTravelers(result.status===200 ? JSON.parse(result.data) : null)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchTrips();
            fetchNames()


        },
        []
    )

   
    const createRequest = async (values, { setSubmitting })=>{
        const result = await axios.post('/api/trip/edit',
            {data: values}
        )
        setSubmitting(false);
        console.log(result)
        if (result.status === 200) {
            history.push("/trips");
        } 
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
                                    <Typography variant="h4">Edit Reservation</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                <ReservationForm trips={trips} travelers={travelers} edit={false} initialValues={{a:'a'}} 
                                            
                                            actionSubmit={
                                                createRequest
                                            }
                                        />
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


export {EditReservation};


