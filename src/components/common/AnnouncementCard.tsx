// src/components/AnnouncementCard.tsx
import React from "react";
import { Card, CardHeader, CardContent, Avatar, Typography, Chip } from "@mui/material";

type Announcement = {
  _id: string;
  title: string;
  content: string;
  type: string;
  subject: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
};

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: "1rem auto", boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar src={announcement.authorAvatar}>
            {announcement.authorName?.charAt(0)}
          </Avatar>
        }
        title={announcement.authorName}
        subheader={new Date(announcement.createdAt).toLocaleString()}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {announcement.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {announcement.content}
        </Typography>
        <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Chip label={announcement.type} color="primary" size="small" />
          <Chip label={announcement.subject} color="secondary" size="small" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
