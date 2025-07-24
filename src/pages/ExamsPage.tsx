import React, { useEffect, useState } from "react";
import { 
  Box, 
  Typography, 
  CircularProgress, 
  useTheme, 
  Pagination,
  Avatar,
  Chip,
  Stack,
  Card,
  CardContent
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getQuizzes } from "../store/quizSlice";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";

interface Quiz {
  _id: string;
  title: string;
  description: string;
  subject: string;
  semester: string;
  duration: number;
  totalMarks: number;
  authorName?: string;
  authorAvatar?: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 6; 

const StyledCard = styled(Card)({
  boxShadow: '0 4px 20px -5px rgba(20, 66, 114, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 150, 199, 0.3)',
  },
  borderLeft: '4px solid #0096c7',
  borderRadius: '12px',
  overflow: 'hidden',
});

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

const SemesterChip = styled(Chip)({
  backgroundColor: '#0096c7',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#007ba5',
  }
});

const ExamsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { items: quizzes, status } = useAppSelector((state) => state.quizzes);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  // Pagination logic
  const totalPages = Math.ceil(quizzes.length / ITEMS_PER_PAGE);
  const paginatedQuizzes = quizzes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LayoutWrapper>
      <Box sx={{ 
        width: { xs: '100%', md: 'calc(100% - 280px)' },
        ml: { xs: 0, md: '100px' },
        px: { xs: 2, sm: 3 },
        py: 4,
        minHeight: 'calc(100vh - 64px)',
        background: theme.palette.background.default
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ 
            mb: 4,
            p: 3,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #0096c7 0%, #144272 100%)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 150, 199, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
              animation: 'shimmer 3s infinite',
              '@keyframes shimmer': {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
              }
            }
          }}>
            <Typography 
              variant="h4"
              component="h1"
              fontWeight="700"
              sx={{ 
                mb: 1,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}
            >
              Exam Center
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                opacity: 0.9,
                maxWidth: '600px',
                position: 'relative'
              }}
            >
              Browse and take available exams. Your performance matters.
            </Typography>
          </Box>
        </motion.div>

        {/* Loading State */}
        {status === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                background: 'white',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
            >
              <CircularProgress 
                size={60} 
                thickness={4}
                sx={{ color: '#0096c7' }}
              />
              <Typography variant="body1" sx={{ mt: 2, color: '#144272' }}>
                Loading exams...
              </Typography>
            </Box>
          </motion.div>
        )}

        {/* Empty State */}
        {status === "succeeded" && quizzes.length === 0 && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '300px',
                textAlign: 'center',
                p: 4,
                background: 'white',
                borderRadius: 2,
                border: '2px dashed',
                borderColor: '#0096c7',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ color: '#144272', mb: 1, fontWeight: 600 }}
              >
                No Exams Available
              </Typography>
              <Typography variant="body1" sx={{ color: '#5a6a85' }}>
                New exams will appear here when available
              </Typography>
            </Box>
          </motion.div>
        )}

        {/* Quiz Grid */}
        <AnimatePresence>
          {status === "succeeded" && quizzes.length > 0 && (
            <>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                  },
                  gap: 3,
                }}
              >
                {paginatedQuizzes.map((quiz: Quiz, index) => (
                  <motion.div
                    key={quiz._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                    layout
                  >
                    <StyledCard>
                      <CardContent>
                        {/* Author Info */}
                        <Box display="flex" alignItems="center" mb={2}>
                          <StyledAvatar
                            src={quiz.authorAvatar}
                            alt={quiz.authorName || 'Author'}
                          />
                          <Box flex={1}>
                            <Box display="flex" justifyContent="space-between">
                              <Typography variant="subtitle1" fontWeight="bold" color="#144272">
                                {quiz.authorName || 'System'}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {new Date(quiz.createdAt).toLocaleDateString()}
                              </Typography>
                            </Box>
                            {quiz.subject && (
                              <Typography variant="body2" color="text.secondary">
                                {quiz.subject}
                              </Typography>
                            )}
                          </Box>
                        </Box>

                        {/* Quiz Title */}
                        <Typography variant="h6" gutterBottom fontWeight="bold" color="#144272">
                          {quiz.title}
                        </Typography>

                        {/* Quiz Description */}
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
                          {quiz.description}
                        </Typography>

                        {/* Quiz Details */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="body2">
                            <strong>Duration:</strong> {quiz.duration} mins
                          </Typography>
                          <Typography variant="body2">
                            <strong>Total Marks:</strong> {quiz.totalMarks}
                          </Typography>
                        </Box>

                        {/* Chips */}
                        <Stack direction="row" spacing={1} mt={2}>
                          {quiz.subject && (
                            <SubjectChip label={quiz.subject} size="small" />
                          )}
                          {quiz.semester && (
                            <SemesterChip label={quiz.semester} size="small" />
                          )}
                        </Stack>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                ))}
              </Box>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Box display="flex" justifyContent="center" mt={4}>
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                      shape="rounded"
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
                        '& .MuiPaginationItem-ellipsis': {
                          color: '#144272',
                        }
                      }}
                    />
                  </Box>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </Box>
    </LayoutWrapper>
  );
};

export default ExamsPage;