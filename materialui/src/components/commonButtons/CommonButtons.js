import React from "react";
import Button from "@mui/material/Button";
const CommonButtons = ({ children, color, disabled, sx, variant,size }) => {
  return <Button 
  color={color}
  disabled={disabled}
  sx={sx}
  variant={variant}
  size={size}
  >
    {children}</Button>;
};

export default CommonButtons;
