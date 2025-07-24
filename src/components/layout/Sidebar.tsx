import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
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

interface SidebarProps {
  onItemClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [selected, setSelected] = React.useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, value: "Dashboard", path: "/dashboard" },
    { label: "Schedule", icon: <ScheduleIcon />, value: "Schedule", path: "/schedule" },
    { label: "Courses", icon: <CoursesIcon />, value: "Courses", path: "/courses" },
    { label: "Gradebook", icon: <GradebookIcon />, value: "Gradebook", path: "/gradebook" },
    { label: "Performance", icon: <PerformanceIcon />, value: "Performance", path: "/performance" },
    { label: "Announcement", icon: <AnnouncementIcon />, value: "Announcement", path: "/announcements" }
  ];

  const bottomMenuItems = [
    { label: "Settings", icon: <SettingsIcon />, value: "Settings", path: "/settings" },
    { label: "Logout", icon: <LogoutIcon />, value: "Logout", path: "/logout" }
  ];

  const handleNavigation = (value: string, path: string) => {
    setSelected(value);
    navigate(path);
    if (onItemClick) {
      onItemClick(); // Close the drawer on mobile after clicking an item
    }
  };

  return (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        background: "linear-gradient(180deg, #0096c7 0%, #144272 100%)",
        display: "flex",
        flexDirection: "column",
        p: 3,
        overflowY: 'auto'
      }}
    >
      {/* COLIGO Logo with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          marginBottom: '2rem',
          alignSelf: 'flex-start',
          paddingLeft: '16px'
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: "1.75rem",
            fontWeight: 700,
            textAlign: "left",
            py: 2,
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            COLIGO
          </motion.span>
        </Box>
      </motion.div>

      {/* Main Menu */}
      <List sx={{ flex: 1, p: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.value} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={selected === item.value}
              onClick={() => handleNavigation(item.value, item.path)}
              sx={{
                borderRadius: "12px",
                px: 2,
                py: 1.25,
                backgroundColor: selected === item.value 
                  ? "rgba(255, 255, 255, 0.35)"
                  : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)"
                },
                "&.Mui-selected": {
                  backgroundColor: "rgba(255, 255, 255, 0.35)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.4)"
                  }
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: selected === item.value ? "white" : "rgba(255,255,255,0.8)" 
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: selected === item.value ? 700 : 500,
                  color: "white",
                  letterSpacing: "0.5px"
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Bottom Menu */}
      <List sx={{ p: 0 }}>
        {bottomMenuItems.map((item) => (
          <ListItem key={item.value} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleNavigation(item.value, item.path)}
              sx={{
                borderRadius: "12px",
                px: 2,
                py: 1.25,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              <ListItemIcon sx={{ color: "rgba(255,255,255,0.7)" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)"
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