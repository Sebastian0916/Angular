import React, { useState } from "react";
import { Box, AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function HeaderAppBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.primary, 0.12),
    marginRight: theme.spacing(2),
    width: "100%",
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 1),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  const [tab, setTab] = useState(0);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="ID, radicado o asunto" />
            </Search>
            <MoreVertIcon sx={{ paddingY: 2.4 }} />
          </Toolbar>
        </AppBar>
      </Box>

      <Tabs
        value={tab}
        variant="fullWidth"
        onChange={(event, newTab) => setTab(newTab)}
      >
        <Tab
          icon={<PersonOutlineOutlinedIcon />}
          iconPosition="start"
          label="Asignadas a mí"
        />
        <Tab
          icon={<WorkOutlineIcon />}
          iconPosition="start"
          label="Para mi cargo"
        />
      </Tabs>
    </>
  );
}
