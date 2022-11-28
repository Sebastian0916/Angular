import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Logo from "./Logos/Logo";
import LogoSinco from "./Logos/LogoSinco";
import Tipografia from "./Tipografia/Tipografia";
import Form from "./Forms/Form";
export default function Login() {
  return (
    <Container>
      <Logo />
      <Tipografia />
      <Form />
      <LogoSinco />
    </Container>
  );
}
