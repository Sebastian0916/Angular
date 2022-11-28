import React from "react";
import {
  Stack,
  Chip,
  Button,
  Menu,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Buttons() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <Stack
        pt={2}
        pb={2.5}
        ml={1}
        mt={1}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        color=''
      >
        <Stack spacing={0.6} mt={0.5} direction="row" color="inherit">
          <Chip label="Todas" variant="outlined" color="primary" />
          <Chip label="Vencidas" variant="outlined" color="primary" />
          <Chip label="Actuales" variant="outlined" color="primary" />
        </Stack>
        <Stack direction="row" >
          <Button
            size="small"
            color="inherit"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
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
              <FormControlLabel
                control={<Checkbox />}
                label="Confirmar Recibido"
              />
              <Divider />
              <FormControlLabel
                control={<Checkbox />}
                label="Redistribución de correspondencia"
              />
              <Divider />
              <FormControlLabel
                control={<Checkbox />}
                label="Confirmar recibido"
              />
              <Divider />
              <FormControlLabel
                control={<Checkbox />}
                label="Confirmar Recibido"
              />
            </FormGroup>
          </Menu>
        </Stack>
      </Stack>
  );
}
