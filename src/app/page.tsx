'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import FeaturedDestinations from '@/components/FeaturedDestinations';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(4),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

export default function Home() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Chào mừng đến với VintelliTour
          </Typography>
          <Typography variant="h5" paragraph>
            Khám phá thế giới qua công nghệ thực tế ảo
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <CardsContainer>
          <FeatureCard>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Tham Quan 360 Độ
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Trải nghiệm không gian một cách chân thực với công nghệ 360 độ. Khám phá các địa điểm nổi tiếng từ mọi góc nhìn.
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/360tour" passHref>
                <Button variant="contained" color="primary">
                  Khám phá ngay
                </Button>
              </Link>
            </CardActions>
          </FeatureCard>

          <FeatureCard>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Giới Thiệu
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Tìm hiểu thêm về chúng tôi và các dịch vụ mà chúng tôi cung cấp.
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/aboutus" passHref>
                <Button variant="contained" color="primary">
                  Tìm hiểu thêm
                </Button>
              </Link>
            </CardActions>
          </FeatureCard>
        </CardsContainer>
      </Container>

      <FeaturedDestinations />
    </Box>
  );
}
