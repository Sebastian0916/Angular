import React from "react";
import {
  Stack,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const CardsError = () => {
  return (
    <Card elevation={3}>
      <Stack direction="row">
        <CardContent>
          <Stack alignItems="flex-start">
            <Typography variant="body1" gutterBottom>
              Acta de entrega Apto. 1705
            </Typography>
            <Chip label="Confirmar Recibido" />
            <Typography variant="caption" gutterBottom>
              Proveedor
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              800140949-CAFESALUD
            </Typography>
          </Stack>
        </CardContent>
        <Stack mt={4}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            ml={5.5}
          >
            <TodayIcon color='error'/>
            <Stack direction="column">
              <Typography color="text.secondary">Vencimiento:</Typography>
              <Typography color="error">30/01/2022</Typography>
            </Stack>
          </Stack>
          <Stack ml={12} mt={1} justifyContent="flex-end">
            <Button variant="outlined">
              <KeyboardArrowDownOutlinedIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
export default CardsError;
