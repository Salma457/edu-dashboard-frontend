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
import {
  cardStyles,
  cardContentStyles,
  headerStyles,
  showAllButtonStyles,
  loadingContainerStyles,
  emptyStateStyles,
  errorStateStyles
} from "../styles/common/AnnouncementsSection.styles";

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
      navigate("/announcements");
    }
  };

  if (status === "loading") return (
    <Box sx={loadingContainerStyles}>
      <CircularProgress />
    </Box>
  );

  if (status === "failed") return (
    <Typography sx={errorStateStyles}>
      Failed to fetch announcements.
    </Typography>
  );

  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <Box sx={headerStyles}>
          <Typography variant="h5" fontWeight="bold">
            Announcements
          </Typography>
          {announcements.length > 3 && (
            <Button
              variant="outlined"
              onClick={handleShowAll}
              sx={showAllButtonStyles}
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
          <Typography sx={emptyStateStyles}>
            No announcements available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AnnouncementsSection;