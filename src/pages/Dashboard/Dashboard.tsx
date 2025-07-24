import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getAnnouncements } from "../../store/announcementSlice";
import { getQuizzes } from "../../store/quizSlice";
import requireAuth from "../../hoc/requireAuth";
import { Box } from "@mui/material";
import ExamTipsHeader from "../../components/common/ExamTipsHeader";
import AnnouncementsSection from "../../components/common/AnnouncementsSection";
import WhatsDueCard from "../../components/common/WhatsDueCard";
import LayoutWrapper from "../../components/layout/LayoutWrapper";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getQuizzes());
  }, [dispatch]);

  return (
    <LayoutWrapper>
      <ExamTipsHeader />
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mt={2}
      >
        {/* Left Side - Announcements */}
        <Box flex={{ xs: 1, md: 3 }} width="100%">
          <AnnouncementsSection />
        </Box>

        {/* Right Side - Whats Due - Now visible on all screens */}
        <Box flex={{ xs: 1, md: 1 }} width="100%">
          <WhatsDueCard />
        </Box>
      </Box>
    </LayoutWrapper>
  );
};

export default requireAuth(Dashboard);