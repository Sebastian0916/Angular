import { Box, TextField, Button } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box mt={12} ml={5} width={310}>
      <TextField
        id="standard-basic"
        label="Usuario"
        variant="standard"
        margin="normal"
        fullWidth
        size="small"
      />
      <br/>
      <TextField
        id="standard-basic"
        label="Contraseña"
        variant="standard"
        margin="normal"
        fullWidth
        size="small"
      />
      <Box mt={10}>
        <Button variant="contained" color="primary" size="medium">
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
