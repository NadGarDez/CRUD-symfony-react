import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';



const Reservations = ()=>{
   
    const [trips,setTrips] = useState(null);

    /*
    useEffect(
        async ()=>{
            try {
                const fetchedLocations = await fetchTravelers();
                console.log(fetchedLocations);
                setTrips([...fetchedLocations])
            } catch (error) {
                console.log(error)
            }            
        },
        []
    )


*/
    const fetchTravelers = async ()=>{
        const result = await axios.get('/api/trips');
        return result.status===200 ? result.data.trips : []
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
                                    <Typography variant="h4">Reservation List</Typography>
                                </Box>
                                <Box sx={{width:'50%', display:'flex', flexDirection:'row-reverse'}}>
                                    <Button variant="outlined" href="/createTrip" color="secondary" endIcon={<AddCircleOutline/>}>
                                        Add Reservation
                                    </Button>
                                </Box>
                            </Box>
                            <TableContainer sx={{maxHeight:'90%'}}>
                            <Table size="large">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontSize:20}}>ID</TableCell>
                                        <TableCell style={{fontSize:20}}>Name</TableCell>
                                        <TableCell style={{fontSize:20}}>Trip</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                {
                                    trips !== null && trips.map(
                                        item => {
                                            return(
                                                <TableRow >
                                                    <TableCell>{item.id}</TableCell>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.trip}</TableCell>
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


export {Reservations};