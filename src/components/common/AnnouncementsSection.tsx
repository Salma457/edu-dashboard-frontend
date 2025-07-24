import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { 
  Box, 
  Typography, 
  Button, 
  CircularProgress,
  Card,
  CardContent
} from "@mui/material";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementsSection = () => {
  const navigate = useNavigate();
  const { items: announcements, status } = useAppSelector(
    (state) => state.announcements
  );
  const [showAll, setShowAll] = useState(false);
  
  const displayedAnnouncements = showAll ? announcements : announcements.slice(0, 3);

  const handleShowAll = () => {
    if (showAll) {
      setShowAll(false);
    } else {
      navigate("/announcements"); // Navigate to announcements page
    }
  };

  if (status === "loading") return (
    <Box display="flex" justifyContent="center" py={4}>
      <CircularProgress />
    </Box>
  );

  if (status === "failed") return (
    <Typography color="error" textAlign="center" py={2}>
      Failed to fetch announcements.
    </Typography>
  );

  return (
    <Card sx={{ 
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff'
    }}>
      <CardContent sx={{ p: 3 }}>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" fontWeight="bold">
            Announcements
          </Typography>
          {announcements.length > 3 && (
            <Button
              variant="outlined"
              onClick={handleShowAll}
              sx={{
                textTransform: 'none',
                color: '#0096c7',
                borderColor: '#0096c7',
                '&:hover': {
                  backgroundColor: 'rgba(0, 150, 199, 0.08)'
                }
              }}
            >
              {showAll ? 'Show Less' : `Show All (${announcements.length})`}
            </Button>
          )}
        </Box>

        {displayedAnnouncements.length > 0 ? (
          <>
            {displayedAnnouncements.map((announcement) => (
              <AnnouncementCard 
                announcement={announcement} 
              />
            ))}
          </>
        ) : (
          <Typography 
            variant="body1" 
            color="textSecondary" 
            textAlign="center" 
            py={4}
          >
            No announcements available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AnnouncementsSection;