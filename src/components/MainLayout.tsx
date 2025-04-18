'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareSpaceSidebar from './ShareSpaceSidebar';

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

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function MainLayout({ children, showSidebar = true }: MainLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <MainContent>
        {children}
      </MainContent>
      {showSidebar && (
        <SidebarWrapper>
          <ShareSpaceSidebar />
        </SidebarWrapper>
      )}
    </Box>
  );
} 