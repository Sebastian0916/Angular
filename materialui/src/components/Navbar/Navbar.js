import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItemns } from "./const/navbaritem";
import { NavbarStyles } from "./const/style";
import {  useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Drawer 
      sx={NavbarStyles.drawer} 
      variant="permanent" 
      anchor="left"
      >
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItemns.map((item, index) => (
          <ListItem 
          button
          key={item.id} 
          onClick={() => navigate(item.route)}
      >
        <ListItemIcon 
          sx={NavbarStyles.icons}
          >
          {item.icon}
          </ListItemIcon>
          <ListItemText 
          sx={NavbarStyles.text} 
          primary={item.label} />
        </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
