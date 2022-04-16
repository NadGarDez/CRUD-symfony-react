import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { TravelerForm } from './Forms';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';





const EditTraveler = ()=>{

   
    const history = useNavigate()

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
                                    <Typography variant="h4">Edit Traveler</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                <TravelerForm  initialValues={{}} 
                                            
                                            actionSubmit={
                                                (values, { setSubmitting }) => {
                                                    setTimeout(() => {
                                                    alert(JSON.stringify(values, null, 2));
                                                    setSubmitting(false);
                                                    }, 400);
                                                }
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


export {EditTraveler};


