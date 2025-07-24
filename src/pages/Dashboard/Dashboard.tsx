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
import {
  dashboardContainerStyles,
  leftSideStyles,
  rightSideStyles
} from "../styles/Dashboard/Dashboard.styles";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getQuizzes());
  }, [dispatch]);

  return (
    <LayoutWrapper>
      <ExamTipsHeader />
      <Box sx={dashboardContainerStyles}>
        {/* Left Side - Announcements */}
        <Box sx={leftSideStyles}>
          <AnnouncementsSection />
        </Box>

        {/* Right Side - Whats Due */}
        <Box sx={rightSideStyles}>
          <WhatsDueCard />
        </Box>
      </Box>
    </LayoutWrapper>
  );
};

export default requireAuth(Dashboard);