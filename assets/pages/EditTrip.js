import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { TripForm } from './Forms';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';





const EditTrip = ()=>{

    const [trip,setTrip] = useState(null);
    const {idTrip} = useParams()
    const history = useNavigate()


    const [initialValues,setInitialValues] = useState(null)
 
    useEffect(
        async ()=>{
            const result = await fetchTrip()

            console.log(result)
            if (result !== null) {
                setInitialValues(result)
            }
        },
        []

    )
    
   

    const fetchTrip = async ()=>{
        const result = await axios.get(`/api/trip/${idTrip}`);
        return result.status===200 ? result.data : null
    }

    const editRequest = async (values, { setSubmitting })=>{
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
                                    <Typography variant="h4">Edit Trip</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                       {
                                           initialValues!== null ? (
                                                <TripForm initialValues={initialValues} 
                                            
                                                    actionSubmit={
                                                        (values, { setSubmitting }) => {
                                                            setTimeout(() => {
                                                            alert(JSON.stringify(values, null, 2));
                                                            setSubmitting(false);
                                                            }, 400);
                                                        }
                                                    }
                                                />
                                           ):
                                           (
                                               <Typography>Loading...</Typography>
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


export {EditTrip};


