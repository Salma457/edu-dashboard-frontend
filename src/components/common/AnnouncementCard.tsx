import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import {
  cardStyles,
  avatarStyles,
  authorInfoStyles,
  contentStyles,
  contentTextStyles
} from "../styles/common/AnnouncementCard.styles";

type Announcement = {
  _id: string;
  content: string;
  type: string;
  subject: string;
  authorName: string;
  authorAvatar: string;
};

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <Box sx={cardStyles}>
      <Avatar 
        src={announcement.authorAvatar}
        sx={avatarStyles}
      />

      <Box sx={authorInfoStyles}>
        <Typography variant="subtitle1" fontWeight="bold">
          {announcement.authorName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {announcement.subject}
        </Typography>
      </Box>

      <Box sx={contentStyles}>
        <Typography variant="body1" sx={contentTextStyles}>
          {announcement.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnnouncementCard;