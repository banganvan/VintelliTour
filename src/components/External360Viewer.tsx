'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface External360ViewerProps {
  url: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

const ViewerContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  marginTop: '2rem',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
}));

const External360Viewer = ({ url, title, width = '100%', height = '500px' }: External360ViewerProps) => {
  return (
    <ViewerContainer>
      <iframe
        src={url}
        width={width}
        height={height}
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {title && (
        <Typography 
          variant="subtitle1" 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '8px 16px',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
          }}
        >
          {title}
        </Typography>
      )}
    </ViewerContainer>
  );
};

export default External360Viewer; 