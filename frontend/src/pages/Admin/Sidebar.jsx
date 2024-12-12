import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import DepartmentIcon from "@mui/icons-material/Business";
import GradeIcon from "@mui/icons-material/Grade";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaveIcon from "@mui/icons-material/AccountTree";

const Sidebar = () => {
  const drawerWidth = 310;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
    { text: "Employees", icon: <PeopleIcon />, link: "/dashboard/employees" },
    {
      text: "Department",
      icon: <DepartmentIcon />,
      link: "/dashboard/department",
    },
    { text: "Grades", icon: <GradeIcon />, link: "/dashboard/grades" },
    {
      text: "Manage Leaves",
      icon: <LeaveIcon />,
      link: "/dashboard/manage-leaves",
    },
    { text: "Attendance", icon: <EventIcon />, link: "/dashboard/attendance" },
    { text: "Projects", icon: <WorkIcon />, link: "/dashboard/project" },
    { text: "Settings", icon: <SettingsIcon />, link: "/dashboard/setting" },
  ];

  const handleLinkClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 2,
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <PersonIcon sx={{ fontSize: 48, color: "white" }} />
      </Toolbar>

      <Divider />
      <List sx={{ flexGrow: 1, px: 1 }}>
        {menuItems.map((item) => (
          <Link
            draggable={false}
            key={item.text}
            to={item.link}
            style={{
              textDecoration: "none",
              color: "rgba(0, 0, 0, 0.87)",
            }}
            onClick={(e) => handleLinkClick(e, item.link)}
          >
            <ListItem
              sx={{ borderRadius: "5px" }}
              className={location.pathname === item.link ? "active" : ""}
            >
              {/* <Tooltip title={item.text} placement="bottom-end" arrow> */}
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
              {/* </Tooltip> */}
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Box sx={{ textAlign: "center" }}>
        <List sx={{ flexGrow: 1 }}>
          <ListItem key={"Logout"}>
            {/* <Tooltip title={item.text} placement="bottom-end" arrow> */}
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
            {/* </Tooltip> */}
          </ListItem>
        </List>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "primary.main",
          color: "white",
          boxSizing: "border-box",
          px: 1,
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* Human Resource Management System */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ mt: 1 }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;
