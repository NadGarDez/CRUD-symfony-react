import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';





const Trips = ()=>{

    const [trips,setTrips] = useState(null);

    useEffect(
         ()=>{

            (
                async ()=>{
                    let result = "";
                    try {
                        result = await axios.get('/api/trips');
                    } catch (error) {
                        console.log(error)
                    }
                    setTrips(result.status===200 ? JSON.parse(result.data) : null)
                }
            )()
        
        },
        []
    )



    const fetchTrips = async ()=>{
        let result;
        try {
            result = await axios.get('/api/trips');
            
        } catch (error) {
            console.log(error)
        }
       
        setTrips(result.status===200 ? JSON.parse(result.data) : null)
    }

    const deleteTrip = async (id)=>{
        let result;
        try {
            result = await axios.delete(`/api/deleteTrip/${id}`);
            if (result.status === 200) {
                fetchTrips() 
            }
            console.log(result);
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
                                    <Typography variant="h4">Trip List</Typography>
                                </Box>
                                <Box sx={{width:'50%', display:'flex', flexDirection:'row-reverse'}}>
                                    <Button variant="outlined" href="/createTrip" color="secondary" endIcon={<AddCircleOutline/>}>
                                        Add Trip
                                    </Button>
                                </Box>
                            </Box>
                            <TableContainer sx={{maxHeight:'90%'}}>
                            <Table size="large">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontSize:20}}>ID</TableCell>
                                        <TableCell style={{fontSize:20}}>Places Number</TableCell>
                                        <TableCell style={{fontSize:20}}>Destination</TableCell>
                                        <TableCell style={{fontSize:20}}>Origin</TableCell>
                                        <TableCell style={{fontSize:20}}>Price</TableCell>
                                        <TableCell style={{fontSize:20}}>ActFions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                {
                                    (trips !== null && Array.isArray(trips)) && trips.map(
                                        item => {
                                            return(
                                                <TableRow >
                                                    <TableCell>{item.id}</TableCell>
                                                    <TableCell>{item.placesNumber}</TableCell>
                                                    <TableCell>{item.destination}</TableCell>
                                                    <TableCell>{item.origin}</TableCell>
                                                    <TableCell>{item.price}</TableCell>
                                                    <TableCell>
                                                      <Tooltip title="Edit">
                                                        <IconButton color="primary" name="edit"
                                                            href={`/editTrip/${item.id}`}
                                                        >

                                                          <Edit/>
                                                        </IconButton>
                                                      </Tooltip>
                                                      <Tooltip title="Delete">
                                                        <IconButton color="primary" name="edit"
                                                          onClick={
                                                            ()=>{
                                                              deleteTrip(item.id)
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


export {Trips};


