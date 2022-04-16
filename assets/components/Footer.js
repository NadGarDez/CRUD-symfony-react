import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LinkedIn, GitHub, Email, DoubleArrow } from '@mui/icons-material';
import React from "react";

const Footer = ()=>{
    return (
        <>
        
        <Box  pt={2} sx={{boxShadow: 3,display:'flex',flexDirection:'column',zIndex:2,background: "linear-gradient(#54362c, #000);",flexWrap:'wrap', minHeight:'40vh'}}>
           <Box mt={3} pl={3} sx={{background: "linear-gradient(to right,#3d2719, #281406);", display:'flex', flexDirection:'row'}}>
                <Box sx={{width:3/4, display:{xl:'flex',md:'flex', xs:'none', sm:'none'}}}>
                <Typography variant="ContrastTittle" textAlign="justify">There's a big world out there</Typography>
                </Box>
                <Box sx={{width:1/4, display:{xl:'flex',md:'flex', xs:'none', sm:'none'},flexDirection:'row-reverse' }}>
                    <DoubleArrow color="primary" sx={{ fontSize: 80 }}/>
                    <DoubleArrow color="primary" sx={{ fontSize: 80 }}/>
                    <DoubleArrow color="primary" sx={{ fontSize: 80 }}/>
                </Box>

                <Box sx={{width:4/4, display:{xl:'none',md:'none', xs:'flex', sm:'flex'}, justifyContent:'center', alignItems:'center'}}>
                <Typography variant="ContrastSubtitle" textAlign="justify">There's a big world out there</Typography>
                </Box>
                
                
           </Box>
           
           

            <Box p={3} mt={1} sx={{zIndex:2, display:{md:'flex', xl:'flex', sm:'none', xs:'none'}, flexDirection:'row'}}>
                <Box p={1} sx={{flexGrow:1, display:'flex',flexDirection:'column', width:'50%'}}>
                    <Typography  variant="ContrastSubtitle">
                        About Us
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>

                </Box>
                <Box p={1} sx={{flexGrow:1, width:'25%', display:'flex',flexDirection:'column'}}>
                            <Typography ml={2} variant="ContrastSubtitle" >
                                Links
                            </Typography>


                    <Link ml={2} mt={2} variant="ContrastContent" href="/trips">
                        Sites
                    </Link>
                    <Link  ml={2} variant="ContrastContent" href="/travelers">
                        Travelers
                    </Link>
                    <Link  ml={2} variant="ContrastContent" href="/reservations">
                        Reservations
                    </Link>

                </Box>
                <Box sx={{flexGrow:1, width:'25%', display:'flex',flexDirection:'column'}}>
                        <Typography variant="ContrastSubtitle" align="right">
                            Developer
                        </Typography>
                        <Typography mt={2} variant="ContrastContent" align="right">
                            @NadGarDez , Web and Mobile Fullstack Developer
                        </Typography>
                        <Typography mt={1} variant="ContrastContent" align="right">
                            16/04/2022. Calabozo Edo Guarico Venezuela
                        </Typography>
                        <Box mt={1} sx={{display:'flex',flexDirection:'row-reverse'}}>
                            <GitHub sx={{margin:0.5}} color="primary" />
                            <LinkedIn sx={{margin:0.5}} color="primary" />
                            <Email sx={{margin:0.5}} color="primary" />
                        </Box>
                        



                
                </Box>
            </Box>
            <Box p={3} mt={1} sx={{zIndex:2,  display:{md:'none', xl:'none', sm:'flex', xs:'flex'}, flexDirection:'column'}}>
                <Box p={1} sx={{flexGrow:1, display:'flex',flexDirection:'column', width:'100%%'}}>
                    <Typography  variant="ContrastSubtitle" textAlign="center">
                        About Us
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>

                </Box>
                <Box p={1} mt={5} sx={{flexGrow:1, width:'100%', display:'flex',flexDirection:'column'}}>
                            <Typography ml={2} variant="ContrastSubtitle" textAlign="center">
                                Links
                            </Typography>


                    <Link ml={2} mt={2} variant="ContrastContent" textAlign="center" href="/trips">
                        Sites
                    </Link>
                    <Link  ml={2} variant="ContrastContent" textAlign="center"  href="/travelers">
                        Travelers
                    </Link>
                    <Link  ml={2} variant="ContrastContent" textAlign="center" href="reservations">
                        Reservation
                    </Link>

                </Box>
                <Box sx={{flexGrow:1, width:'100%', display:'flex',flexDirection:'column'}} mt={5}>
                        <Typography variant="ContrastSubtitle" textAlign="center">
                            Developer
                        </Typography>
                        <Typography mt={2} variant="ContrastContent" textAlign="center">
                            @NadGarDez , Web and Mobile Fullstack Developer
                        </Typography>
                        <Typography mt={1} variant="ContrastContent" textAlign="center">
                            14/04/2022. Calabozo Edo Guarico Venezuela
                        </Typography>
                        <Box mt={1} sx={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                            <GitHub sx={{margin:0.5}} color="primary" />
                            <LinkedIn sx={{margin:0.5}} color="primary" />
                            <Email sx={{margin:0.5}} color="primary" />
                        </Box>
                        



                
                </Box>
            </Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column-reverse', backgroundColor:'black',height:'10vh'}}>
            <Typography variant="ContrastLittle">©2022 Todos los derechos reservados</Typography>
        </Box>
        
        </>
    )
}


export {Footer};