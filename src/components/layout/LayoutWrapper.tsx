import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#f5f7fb'
    }}>
      {/* Main Content Area */}
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Fixed Navbar */}
        <Box sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 1100
        }}>
          <Navbar />
        </Box>
        
        {/* Scrollable Content */}
        <Box component="main" sx={{
          flex: 1,
          pt: '64px', // Height of navbar
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
          display: 'flex'
        }}>
          {/* Content */}
          <Box sx={{
            flex: 1,
            p: 3,
            ml: { md: '280px' } // Space for sidebar
          }}>
            {children}
          </Box>
          
          {/* Fixed Sidebar (on right) */}
          <Box sx={{
            width: 280,
            position: 'fixed',
            left: 0,
            top: 64,
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
            zIndex: 1000,
            display: { xs: 'none', md: 'block' }
          }}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutWrapper;