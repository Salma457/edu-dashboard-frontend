import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  rootStyles,
  mainContentStyles,
  navbarWrapperStyles,
  scrollableContentStyles,
  contentStyles,
  sidebarStyles
} from "../styles/layout/LayoutWrapper.styles";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={rootStyles}>
      {/* Main Content Area */}
      <Box sx={mainContentStyles}>
        {/* Fixed Navbar */}
        <Box sx={navbarWrapperStyles}>
          <Navbar />
        </Box>
        
        {/* Scrollable Content */}
        <Box component="main" sx={scrollableContentStyles}>
          {/* Content */}
          <Box sx={contentStyles}>
            {children}
          </Box>
          
          {/* Fixed Sidebar (on right) */}
          <Box sx={sidebarStyles}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutWrapper;