import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";

import NavAuthLogged from "components/Header/NavAuth/NavAuthLogged/NavAuthLogged";
import { Link, NavLink } from "react-router-dom";
import "./AdminPage.scss";
const drawerWidth = 240;

export default function AdminPage(props) {
  return (
    <Box sx={{ display: "flex" }} className="admin__container">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" className="link-control">
              E-learning
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component={NavAuthLogged}
            width="30%"
          ></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <NavLink
                activeClassName="isActive"
                to="/admin/user-management"
                className="w-100 link-control link-list"
              >
                Quản lý học viên
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink
                activeClassName="isActive"
                to="/admin/course-management"
                className="w-100 link-control link-list"
              >
                Quản lý khóa học
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography component={React.Fragment}>
          {props.children}
        </Typography>
      </Box>
    </Box>
  );
}
