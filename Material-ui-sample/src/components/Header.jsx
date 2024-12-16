import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import SideDrawer from "./SideDrawer";


const useStyles = makeStyles((theme) => ({
  blogTitle: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" className={classes.blogTitle}>
          TechSpotlight
        </Typography>
        <IconButton color="inherit">
          <Badge color="warning" badgeContent={3}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </>
  );
}

export default Header;
