import React from "react";
import { useAppSelector } from "../../app/hooks";
import SectionTitle from "./SectionTitle";
import LoadingSpinner from "./LoadingSpinner";
import { Typography } from "@mui/material";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementsSection = () => {
  const { items: announcements, status } = useAppSelector(
    (state) => state.announcements
  );

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed")
    return (
      <Typography color="error">Failed to fetch announcements.</Typography>
    );

  return (
    <>
      <SectionTitle text="Announcements" />
      {announcements.map((a: any) => (
        <AnnouncementCard key={a._id} announcement={a} />
      ))}
    </>
  );
};

export default AnnouncementsSection;
