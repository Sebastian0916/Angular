import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";

const CardComponent = () => {
  return (
    <Card>
      <CardHeader
        title="Acta de entrega Apto. 1705"
        titleTypographyProps={{ variant: "body1" }}
        sx={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip label="Confirmar Recibido" />
          <Stack direction="row" alignItems="center" gap={1}>
            <TodayIcon />
            <Stack>
              <Typography variant="caption" component="div">
                Vencimiento
                <Typography variant="body2">01/01/2023</Typography>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={1.5}
          >
            <Stack>
              <Typography>
                Proveedor
                <Typography color="text.secondary">
                  800140949- CAFESALUD
                </Typography>
              </Typography>
            </Stack>

            <Button variant="outlined">
              <ExpandMoreIcon />
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
