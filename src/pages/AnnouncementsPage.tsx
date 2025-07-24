import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAnnouncements } from "../store/announcementSlice";
import {
  Typography,
  
  CardContent,

  Box,
  
  Stack,
  Pagination,
  Skeleton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import { motion, AnimatePresence } from "framer-motion";
import {
  StyledCard,
  StyledAvatar,
  SubjectChip,
  TypeChip,
  containerStyles,
  titleStyles,
  contentStyles,
  paginationStyles,
  loadingContainerStyles,
  skeletonTitleStyles,
  skeletonCardStyles
} from "./styles/AnnouncementsPage.styles";

const ITEMS_PER_PAGE = 5;

const AnnouncementsPage = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.announcements);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(getAnnouncements());
  }, [dispatch]);

  // Pagination logic
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (status === "loading") {
    return (
      <LayoutWrapper>
        <Box sx={loadingContainerStyles}>
          <Skeleton variant="text" width={200} height={50} sx={skeletonTitleStyles} />
          {[...Array(3)].map((_, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Skeleton variant="rectangular" height={200} sx={skeletonCardStyles} />
            </Box>
          ))}
        </Box>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <Box sx={containerStyles}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={titleStyles}
        >
          Announcements
        </Typography>

        <AnimatePresence>
          <Stack spacing={3}>
            {paginatedItems.map((announcement: any) => (
              <motion.div
                key={announcement._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StyledCard>
                  <CardContent>
                    <Box display="flex" alignItems="flex-start" mb={2}>
                      <StyledAvatar
                        src={announcement.authorAvatar}
                        alt={announcement.authorName}
                      />
                      <Box flex={1}>
                        <Box display="flex" justifyContent="space-between" flexDirection={isMobile ? 'column' : 'row'}>
                          <Typography variant="subtitle1" fontWeight="bold" color="#144272">
                            {announcement.authorName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {new Date(announcement.createdAt).toLocaleDateString()} • 
                            {new Date(announcement.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {announcement.subject}
                        </Typography>
                      </Box>
                    </Box>

                    {announcement.title && (
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        fontWeight="bold"
                        sx={{ color: '#144272' }}
                      >
                        {announcement.title}
                      </Typography>
                    )}

                    <Typography 
                      variant="body1" 
                      sx={contentStyles}
                    >
                      {announcement.content}
                    </Typography>

                    <Stack direction="row" spacing={1} mt={3} flexWrap="wrap" gap={1}>
                      <TypeChip 
                        label={announcement.type} 
                        size="small"
                      />
                      <SubjectChip 
                        label={announcement.subject} 
                        size="small"
                      />
                    </Stack>
                  </CardContent>
                </StyledCard>
              </motion.div>
            ))}
          </Stack>
        </AnimatePresence>

        {items.length > ITEMS_PER_PAGE && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={paginationStyles}
            />
          </Box>
        )}
      </Box>
    </LayoutWrapper>
  );
};

export default AnnouncementsPage;