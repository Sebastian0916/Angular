import {
  Button,
  Checkbox,
  Chip,
  Divider,
  FormGroup,
  Menu,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

const Actividades = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      py={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" gap={1} ml={2}>
        <Chip label="Todas" variant="outlined" color="primary" />
        <Chip label="Vencidas" variant="outlined" color="primary" />
        <Chip label="Actuales" variant="outlined" color="primary" />
      </Stack>
      <Stack mr={1.5}>
        <Button
          endIcon={<ExpandMoreIcon color="primary" />}
          variant="text"
          color="primary"
          size="large"
          onClick={handleClick}
        >
          Filtrar
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <FormGroup>
            <Stack ml={1.5}>
              <Typography variant="subtitle2" color="primary">
                Actividad
              </Typography>
            </Stack>
            <Stack width={320}>
              <Typography variant="body2">
                <Checkbox />
                Confirmar Recibido
              </Typography>
              <Divider />
              <Typography variant="body2">
                <Checkbox />
                Redistribución de correspondencia
              </Typography>
              <Divider />
              <Typography variant="body2">
                <Checkbox />
                Confirmar Recibido
              </Typography>
              <Divider />
              <Typography variant="body2">
                <Checkbox />
                Redistribución de correspondencia
              </Typography>
            </Stack>
          </FormGroup>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Actividades;
