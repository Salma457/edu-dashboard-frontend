import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAnnouncements } from "../store/announcementSlice";
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Chip,
  Stack,
  Pagination,
  Skeleton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";

const ITEMS_PER_PAGE = 5;

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: `0 4px 20px -5px rgba(20, 66, 114, 0.2)`,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 6px 24px -3px rgba(0, 150, 199, 0.3)`,
  },
  borderLeft: `4px solid #0096c7`,
  borderRadius: '8px',
  overflow: 'hidden',
}));

const StyledAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  marginRight: 16,
  border: "2px solid #0096c7",
  boxShadow: '0 2px 8px rgba(0, 150, 199, 0.3)'
});

const SubjectChip = styled(Chip)({
  backgroundColor: '#144272',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#11315d',
  }
});

const TypeChip = styled(Chip)({
  backgroundColor: '#0096c7',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#007ba5',
  }
});

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
        <Box sx={{ maxWidth: 'md', mx: 'auto', px: 3, py: 4 }}>
          <Skeleton variant="text" width={200} height={50} sx={{ mb: 3 }} />
          {[...Array(3)].map((_, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
            </Box>
          ))}
        </Box>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <Box sx={{ 
        maxWidth: 'md',
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        py: 4,
        minHeight: 'calc(100vh - 128px)'
      }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: '#144272',
            mb: 4,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: '#0096c7',
              borderRadius: '2px'
            }
          }}
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
                      sx={{ 
                        whiteSpace: 'pre-line',
                        lineHeight: 1.6,
                        color: 'text.primary'
                      }}
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
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#144272',
                  fontWeight: 600,
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: '#0096c7',
                  color: 'white',
                },
                '& .MuiPaginationItem-root:hover': {
                  backgroundColor: 'rgba(0, 150, 199, 0.1)',
                },
              }}
            />
          </Box>
        )}
      </Box>
    </LayoutWrapper>
  );
};

export default AnnouncementsPage;