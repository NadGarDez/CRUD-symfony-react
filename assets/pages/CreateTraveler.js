import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { TravelerForm } from './Forms';
import { Box } from '@mui/system';
import { Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';





const CreateTraveler = ()=>{

   

    const createRequest = async (values, { setSubmitting })=>{
        let result;
        try {
            result = await axios.post('/api/createTraveler',{values})
        
        } catch (error) {
            console.log(error)
        }
        
        setSubmitting(false);
        if (result.status === 200) {
          window.history.back();
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
                                    <Typography variant="h4">Create Traveler</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                <TravelerForm initialValues={
                                    {
                                        ci: '',
                                        name: '',
                                        borthDay: '',
                                        phone:''
                                    }
                                } 
                                            
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


export {CreateTraveler};


