// src/pages/dashboard/Dashboard.tsx
import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getAnnouncements } from "../../store/announcementSlice";
import { getQuizzes } from "../../store/quizSlice";
import requireAuth from "../../hoc/requireAuth";
import { Box } from "@mui/material";
import ExamTipsHeader from "../../components/common/ExamTipsHeader";
import AnnouncementsSection from "../../components/common/AnnouncementsSection";
import QuizzesSection from "../../components/common/QuizzesSection";
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
        gap={2}
        mt={2}
      >
        {/* Left Side */}
        <Box flex={3} display="flex" flexDirection="column" gap={2}>
          <AnnouncementsSection />
          <QuizzesSection />
        </Box>

        {/* Right Side */}
        <Box flex={1}>
          <WhatsDueCard />
        </Box>
      </Box>
    </LayoutWrapper>
  );
};

export default requireAuth(Dashboard);
