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
    name: Yup.number()
      .required('Required'),
    borthDay: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone:Yup.string()
        .min(11, 'Too Long!')
        .max(15, 'Too Long!')
        .required('Required'),
    })

const schemaValidatorReservation =Yup.object().shape({
    travelerId: Yup.string()
        .min(1, 'Too Short!')
        .max(9, 'Too Long!')
        .required('Required'),
    tripId: Yup.string()
        .min(1, 'Too Short!')
        .max(9, 'Too Long!')
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
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorTraveler}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        console.log(values)
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1}>
                                    <TextField
                                        placeholder='Destination'
                                        mb={2}
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.destination ?? ''}
                                    />
                                    {errors.email && touched.email && errors.email}
                                </Box>
                                <Box m={1}>
                                    <TextField
                                        placeholder='Places Number'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.placesNumber ?? ''}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </Box>

                                <Box m={1}>

                                    <TextField
                                         placeholder='Origin'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.origin ?? ''}
                                    />

                                </Box>

                                <Box m={1}>
                                    <TextField
                                         placeholder='Prices'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price ?? ''}
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
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorTrip}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        console.log(values)
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1}>
                                    <TextField
                                        placeholder='CI'
                                        mb={2}
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ci ?? ''}
                                    />
                                    {errors.email && touched.email && errors.email}
                                </Box>
                                <Box m={1}>
                                    <TextField
                                        placeholder='Name'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name ?? ''}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </Box>

                                <Box m={1}>

                                    <TextField
                                         placeholder='Birthday'
                                         type="date"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.origin ?? ''}
                                    />

                                </Box>

                                <Box m={1}>
                                    <TextField
                                         placeholder='Phone Number'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price ?? ''}
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


const ReservationForm = ({initialValues, actionSubmit, edit})=>{
    return (
        <>
        
            <BasicForm initial={initialValues} actionSubmit={actionSubmit} validator={schemaValidatorReservation}>
                {
                    ({values,errors,handleChange,handleBlur,handleSubmit,isSubmitting}) =>{
                        return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                
                                <Box m={1}>
                                    <Select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={edit}
                                        placeholder="Traveler"
                                        value={1}
                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={1}>Pedro</MenuItem>
                                        <MenuItem value={2}>Lorena</MenuItem>
                                        <MenuItem value={3}>Sam</MenuItem>
                                    </Select>
                                    {errors.email && touched.email && errors.email}
                                </Box>
                                <Box m={1}>
                                    <Select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={edit}
                                        placeholder="Trip"
                                        value={1}
                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={1}>Calabozo</MenuItem>
                                        <MenuItem value={2}>San Juan</MenuItem>
                                        <MenuItem value={3}>Valle De La Pascua</MenuItem>
                                    </Select>
                                    {errors.email && touched.email && errors.email}
                                </Box>
                             
                                <Box m={1}>
                                    <TextField
                                         placeholder='Pay Reference'
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price ?? ''}
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


const CreateReservationForm = ()=>{
    return (
        <p>hey</p>
    )
}


export {TripForm,TravelerForm,ReservationForm};
