import React from 'react';
import {Formik, Form} from 'formik'
import { Box } from '@mui/system';
import { Button, Select, TextField, MenuItem } from '@mui/material';
import * as Yup from 'yup';



const schemaValidatorTrip =Yup.object().shape({
    destination: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    placesNumber: Yup.number()
      .required('Required'),
    origin: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price:Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    })


const schemaValidatorTraveler =Yup.object().shape({
    ci: Yup.string()
      .min(7, 'Too Short!')
      .max(9, 'Too Long!')
      .required('Required'),
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    birth_date: Yup.string()
        .required('Required'),
    phone_number:Yup.string()
        .min(11, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    })

const schemaValidatorReservation =Yup.object().shape({
    travelerId: Yup.string()
        .required('Required'),
    tripId: Yup.string()
        .required('Required'),
            
    payReference: Yup.string()
        .min(10, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required')})
            
    


const BasicForm = ({children,initial,validator,actionSubmit})=>{
    return (
        <Formik
            initialValues={initial}
            validationSchema={validator}
            onSubmit={actionSubmit}
        >
            {children}
        </Formik>
    )
}

const TripForm = ({initialValues,actionSubmit})=>{
    return (
        <>
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorTrip}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1} sx={{width:350}}> 
                                    <TextField
                                    sx={{width:'100%'}}
                                        placeholder='Destination'
                                        mb={2}
                                        variant="outlined"
                                        name="destination"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.destination ?? ''}
                                        error={Boolean(errors.destination)}
                                        helperText={errors.destination}
                                    />
                                </Box>
                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                        placeholder='Places Number'
                                        variant="outlined"
                                        name="placesNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.placesNumber ?? ''}
                                        error={Boolean(errors.placesNumber)}
                                        helperText={errors.placesNumber}
                                    />
                                </Box>

                                <Box m={1} sx={{width:350}}>

                                    <TextField
                                    sx={{width:'100%'}}
                                         placeholder='Origin'
                                        variant="outlined"
                                        name="origin"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.origin ?? ''}
                                        error={Boolean(errors.origin)}
                                        helperText={errors.origin}
                                    />

                                </Box>

                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                         placeholder='Prices'
                                        variant="outlined"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price ?? ''}
                                        error={Boolean(errors.price)}
                                        helperText={errors.price}
                                    />
                                </Box>

                                <Box m={1} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </Box>

                                
                                
                                
                                
                                
                                
                            
                            </Box>
                            
                        </form>
                    )}
                }
            </BasicForm>
        </>
    )
}


const TravelerForm = ({initialValues,actionSubmit})=>{
    return (
        <>
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorTraveler}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                        name="ci"
                                        placeholder='CI'
                                        mb={2}
                                        variant="outlined"
                                        onChange={handleChange}
                                        helperText={errors.ci}
                                        error={Boolean(errors.ci)}
                                        onBlur={handleBlur}
                                        value={values.ci ?? ''}
                                    />
                                </Box>
                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                        placeholder='Name'
                                        name="name"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name ?? ''}
                                        error={Boolean(errors.name)}
                                        helperText={errors.name}
                                    />
                                </Box>

                                <Box m={1} sx={{width:350}}>

                                    <TextField
                                    sx={{width:'100%'}}
                                         placeholder='Birthday'
                                         type="date"
                                         name="birth_date"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birth_date ?? ''}
                                        error={Boolean(errors.birth_date)}
                                        helperText={errors.birth_date}
                                    />

                                </Box>

                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                         placeholder='Phone Number'
                                        variant="outlined"
                                        name="phone_number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone_number ?? ''}
                                        error={Boolean(errors.phone_number)}
                                        helperText={errors.phone_number}
                                    />
                                </Box>

                                <Box m={1} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </Box>
                                
                            
                            </Box>
                            
                        </form>
                    )}
                }
            </BasicForm>
        </>
    )
}


const ReservationForm = ({initialValues, actionSubmit, edit, trips,travelers})=>{
    return (
        <>
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorReservation}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1} sx={{width:350}}>
                                    <Select
                                        sx={{width:'100%'}}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={edit}
                                        defaultValue="none"
                                        name="travelerId"
                                        placeholder="Traveler"
                                        value={values.traveler}
                                        error={Boolean(errors.travelerId)}
                                        helperText={errors.travelerId}
                                    >
                                        <MenuItem value="none" disabled>
                                            Traveler
                                        </MenuItem>
                                        {
                                            (travelers!==null && Array.isArray(travelers)) && travelers.map(
                                                item=>{
                                                    return (
                                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                                    )
                                            }
                                            )
                                        }

                                    </Select>
                                </Box>
                                <Box m={1}  sx={{width:350}}>
                                    <Select
                                    sx={{width:'100%'}}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={edit}
                                        defaultValue="none"
                                        placeholder="Trip"
                                        name="tripId"
                                        value={values.trips}
                                        error={Boolean(errors.tripId)}
                                        helperText={errors.tripId}
                                    >
                                        <MenuItem value="none" disabled>
                                            Trip
                                        </MenuItem>
                                       {
                                            (trips!==null && Array.isArray(trips)) && trips.map(
                                                item=>{
                                                    return (
                                                        <MenuItem value={item.id}>{item.destination}</MenuItem>
                                                    )
                                            }
                                            )
                                        }
                                    </Select>
                                </Box>
                             
                                <Box m={1} sx={{width:350}}>
                                    <TextField
                                    sx={{width:'100%'}}
                                         placeholder='Pay Reference'
                                         name="payReference"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.payReference ?? ''}
                                        error={Boolean(errors.payReference)}
                                        helperText={errors.payReference}
                                    />
                                </Box>

                                <Box m={1} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                            
                        </form>
                    )}
                }
            </BasicForm>
        </>
    )
}




export {TripForm,TravelerForm,ReservationForm};
