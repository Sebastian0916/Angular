import React from "react";
import { Box, Tabs, Tab,Paper } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function AppTab() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box  position="static"  >
      <Paper elevation={6}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          icon={<PersonOutlineIcon />}
          iconPosition="start"
          label="Asignados a mí"
        />
        <Tab
          icon={<WorkOutlineOutlinedIcon />}
          iconPosition="start"
          label="Para mi cargo"
        />
      </Tabs>
      </Paper>
    </Box>
  );
}
