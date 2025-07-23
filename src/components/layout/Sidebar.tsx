import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Divider,
  Avatar,
  Tooltip
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Schedule as ScheduleIcon,
  Book as CoursesIcon,
  Grade as GradebookIcon,
  TrendingUp as PerformanceIcon,
  Announcement as AnnouncementIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = React.useState("Gradebook");

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, value: "Dashboard" },
    { label: "Schedule", icon: <ScheduleIcon />, value: "Schedule" },
    { label: "Courses", icon: <CoursesIcon />, value: "Courses" },
    { label: "Gradebook", icon: <GradebookIcon />, value: "Gradebook" },
    { label: "Performance", icon: <PerformanceIcon />, value: "Performance" },
    { label: "Announcement", icon: <AnnouncementIcon />, value: "Announcement" }
  ];

  const bottomMenuItems = [
    { label: "Settings", icon: <SettingsIcon />, value: "Settings" },
    { label: "Logout", icon: <LogoutIcon />, value: "Logout" }
  ];

  return (
    <Box
      component={motion.div}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        width: 280,
        height: "100vh",
        background: "linear-gradient(180deg, #0a2647 0%, #144272 100%)",
        display: "flex",
        flexDirection: "column",
        p: 3,
        boxShadow: "8px 0 25px rgba(0,0,0,0.15)",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
          zIndex: -1
        }
      }}
    >
      {/* User Profile Section */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, p: 2, borderRadius: 2 }}>
        <Avatar 
          sx={{ 
            width: 48, 
            height: 48, 
            mr: 2,
            border: "2px solid white",
            boxShadow: theme.shadows[4]
          }}
          src="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <Box>
          <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
            John Doe
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Student
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          mb: 3,
          color: "white",
          fontSize: "1.4rem",
          letterSpacing: 1.5,
          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          px: 1
        }}
      >
        COLIGO
      </Typography>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

      {/* Main Menu */}
      <List sx={{ p: 0, flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.value} 
            disablePadding 
            sx={{ mb: 0.5 }}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <Tooltip title={item.label} placement="right" arrow>
              <ListItemButton
                selected={selected === item.value}
                onClick={() => setSelected(item.value)}
                sx={{
                  borderRadius: "12px",
                  px: 2,
                  py: 1.25,
                  backgroundColor: selected === item.value 
                    ? "rgba(255,255,255,0.25)" 
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)"
                  },
                  "&.Mui-selected": {
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.25)"
                    }
                  },
                  transition: "all 0.2s ease-out"
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: 36,
                  color: selected === item.value ? "white" : "rgba(255,255,255,0.8)",
                }}>
                  {React.cloneElement(item.icon, { 
                    fontSize: "small",
                    sx: { 
                      transition: "transform 0.2s",
                      transform: selected === item.value ? "scale(1.2)" : "scale(1)" 
                    }
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: selected === item.value ? 700 : 500,
                    color: selected === item.value ? "white" : "rgba(255,255,255,0.9)",
                    letterSpacing: 0.3,
                    ml: -1
                  }}
                />
                {selected === item.value && (
                  <Box 
                    component={motion.div} 
                    layoutId="activeIndicator"
                    sx={{
                      width: 4,
                      height: 24,
                      backgroundColor: "white",
                      borderRadius: 3,
                      mr: -1
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />

      {/* Bottom Menu */}
      <List sx={{ p: 0 }}>
        {bottomMenuItems.map((item) => (
          <ListItem key={item.value} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                borderRadius: "12px",
                px: 2,
                py: 1.25,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)"
                },
                transition: "all 0.2s ease-out"
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: 36,
                color: "rgba(255,255,255,0.7)",
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: 0.3,
                  ml: -1
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;