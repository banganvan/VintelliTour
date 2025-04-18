import { Box, Skeleton, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Skeleton variant="circular" width={56} height={56} />
          <Box sx={{ ml: 2 }}>
            <Skeleton variant="text" width={150} height={24} />
            <Skeleton variant="text" width={100} height={20} />
          </Box>
        </Box>

        <Skeleton variant="text" width="80%" height={40} sx={{ mb: 2 }} />
        
        <Box sx={{ mb: 2 }}>
          <Skeleton variant="text" width={100} height={32} sx={{ mr: 1, display: 'inline-block' }} />
          <Skeleton variant="text" width={100} height={32} sx={{ mr: 1, display: 'inline-block' }} />
          <Skeleton variant="text" width={100} height={32} sx={{ display: 'inline-block' }} />
        </Box>

        <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={30} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={30} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={30} height={40} />
        </Box>

        <Skeleton variant="rectangular" width="100%" height={1} sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Skeleton variant="text" width={100} height={32} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width="100%" height={100} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
} 