import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';





const Travelers = ()=>{

    const [travelers,setTravelers] = useState(null);

    
    useEffect(
          ()=>{
            (async ()=>{
                let result;
                try {
                    result = await axios.get('/api/travelers');
                    
                } catch (error) {
                    console.log(error)
                }
               
                setTravelers(result.status===200 ? JSON.parse(result.data) : null)
            })()
            //fetchTravelers()
        },
        []
    )

    
    const fetchTravelers = async ()=>{
        let result;
        try {
            result = await axios.get('/api/travelers');
            
        } catch (error) {
            console.log(error)
        }
       
        setTravelers(result.status===200 ? JSON.parse(result.data) : null)
    }

    const deleteTraveler = async (id)=>{
        let result;
        try {
            result = await axios.delete(`/api/deleteTraveler/${id}`);
            if (result.status === 200) {
              fetchTravelers() 
              
            }
        } catch (error) {
            console.log(error)
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
                                    <Typography variant="h4">Travelers List</Typography>
                                </Box>
                                <Box sx={{width:'50%', display:'flex', flexDirection:'row-reverse'}}>
                                    <Button variant="outlined" href="/createTraveler" color="secondary" endIcon={<AddCircleOutline/>}>
                                        Add Traveler
                                    </Button>
                                </Box>
                            </Box>
                            <TableContainer sx={{maxHeight:'90%'}}>
                            <Table size="large">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontSize:20}}>ID</TableCell>
                                        <TableCell style={{fontSize:20}}>CI</TableCell>
                                        <TableCell style={{fontSize:20}}>Name</TableCell>
                                        <TableCell style={{fontSize:20}}>Birth Date</TableCell>
                                        <TableCell style={{fontSize:20}}>Phone Number</TableCell>
                                        <TableCell style={{fontSize:20}}>ActFions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                {
                                    (travelers !== null && Array.isArray(travelers)) && travelers.map(
                                        (item, index) => {
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell>{item.id}</TableCell>
                                                    <TableCell>{item.ci}</TableCell>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.birth_date}</TableCell>
                                                    <TableCell>{item.phone_number}</TableCell>
                                                    <TableCell>
                                                      <Tooltip title="Edit">
                                                        <IconButton color="primary" name="edit"
                                                            href={`/editTraveler/${item.id}`}
                                                        >

                                                          <Edit/>
                                                        </IconButton>
                                                      </Tooltip>
                                                      <Tooltip title="Delete">
                                                        <IconButton color="primary" name="edit"
                                                          onClick={
                                                            async ()=>{
                                                               deleteTraveler(item.id)
                                                            }
                                                          }
                                                        >

                                                          <Delete/>
                                                        </IconButton>
                                                      </Tooltip>

                                                    </TableCell>
                                                </TableRow >
                                            )
                                        }
                                    )
                                }

                                </TableBody>

                            </Table>
                            </TableContainer>
                        </Paper>
                    </Box>

                
                </Box>
                <Footer/>
            </Box>
        </>
        
    )
}


export {Travelers};


