'use client';

import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareSpaceSidebar from '@/components/ShareSpaceSidebar';
import MainLayout from '@/components/MainLayout';

const ShareContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  minHeight: '100vh',
}));

const PostForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(3),
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginBottom: theme.spacing(4),
}));

const PostButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const MainContent = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '66.6667%',
    paddingRight: theme.spacing(4),
  },
}));

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '33.3333%',
  },
}));

export default function ShareSpace() {
  return (
    <MainLayout>
      <ShareContainer>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <MainContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Không gian chia sẻ
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Chia sẻ những trải nghiệm du lịch của bạn với cộng đồng
              </Typography>

              <PostForm>
                <TextField
                  fullWidth
                  label="Tiêu đề bài viết"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Địa điểm"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Nội dung bài viết"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                />
                <PostButton variant="contained" color="primary">
                  Đăng bài
                </PostButton>
              </PostForm>

              {/* Danh sách bài viết sẽ được thêm vào đây */}
            </MainContent>
            <SidebarWrapper>
              <ShareSpaceSidebar />
            </SidebarWrapper>
          </Box>
        </Container>
      </ShareContainer>
    </MainLayout>
  );
} 