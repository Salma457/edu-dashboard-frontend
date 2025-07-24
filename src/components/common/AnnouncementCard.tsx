import React from "react";
import { Box, Typography, Avatar} from "@mui/material";

type Announcement = {
  _id: string;
  // title: string;
  content: string;
  type: string;
  subject: string;
  authorName: string;
  authorAvatar: string;
  // createdAt: string;
};

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <Box sx={{
      width: '100%',
      mb: 3,
      p: 3,
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'flex-start'
    }}>
      <Avatar 
        src={announcement.authorAvatar}
        sx={{ 
          width: 64, 
          height: 64,
          mr: 3,
          border: "2px solid #0096c7"
        }}
      />

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        mr: 3
      }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {announcement.authorName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {announcement.subject}
        </Typography>
      </Box>

      <Box flex={1}>
        {/* <Typography variant="caption" color="text.secondary" display="block" mb={1}>
          {new Date(announcement.createdAt).toLocaleDateString()} • 
          {new Date(announcement.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </Typography> */}
        
        {/* {announcement.title && (
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {announcement.title}
          </Typography>
        )} */}
        
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {announcement.content}
        </Typography>
        
        {/* <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip 
            label={announcement.type} 
            color="primary" 
            size="small"
            sx={{ fontWeight: 600 }}
          />
        </Stack> */}
      </Box>
    </Box>
  );
};

export default AnnouncementCard;