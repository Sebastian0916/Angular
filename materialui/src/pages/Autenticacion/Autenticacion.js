import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButtons from '../../components/commonButtons/CommonButtons';
const Autenticacion = () => {
  const buttonStyle = {
    fontSize:20,
    fontWeight: 700,
    backgroundColor: 'red',
    '&:hover':{
      backgroundColor:' yellow'
    }
  }
  return (
    <Grid iten xs={8}>
      <CommonButtons 
      variant='outlined'
      size='large'
      sx={buttonStyle}
      >
        Add Person
        </CommonButtons>
    </Grid>
  )
}

export default Autenticacion
