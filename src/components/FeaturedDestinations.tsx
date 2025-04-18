'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const FeaturedContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 'bold',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  objectFit: 'cover',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const ViewButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: 'flex-start',
}));

interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const featuredDestinations: Destination[] = [
  {
    id: '1',
    title: 'Vịnh Hạ Long',
    description: 'Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi tuyệt đẹp.',
    image: '/images/destinations/halong.jpg',
    link: '/360tour',
  },
  {
    id: '2',
    title: 'Phố cổ Hội An',
    description: 'Thành phố cổ kính với kiến trúc độc đáo và văn hóa truyền thống phong phú.',
    image: '/images/destinations/hoian.jpg',
    link: '/360tour',
  },
  {
    id: '3',
    title: 'Sa Pa',
    description: 'Thị trấn miền núi với ruộng bậc thang và văn hóa dân tộc thiểu số.',
    image: '/images/destinations/sapa.jpg',
    link: '/360tour',
  },
  {
    id: '4',
    title: 'Đà Lạt',
    description: 'Thành phố ngàn hoa với khí hậu mát mẻ và cảnh quan thiên nhiên tuyệt đẹp.',
    image: '/images/destinations/dalat.jpg',
    link: '/360tour',
  },
];

export default function FeaturedDestinations() {
  return (
    <FeaturedContainer>
      <Title variant="h3">
        Địa Điểm Nổi Bật
      </Title>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
        {featuredDestinations.map((destination) => (
          <Box key={destination.id}>
            <StyledCard>
              <StyledCardMedia
                image={destination.image}
                title={destination.title}
              />
              <StyledCardContent>
                <Box>
                  <Typography gutterBottom variant="h5">
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.description}
                  </Typography>
                </Box>
                <Link href={destination.link} passHref>
                  <ViewButton variant="contained" color="primary">
                    Xem 360°
                  </ViewButton>
                </Link>
              </StyledCardContent>
            </StyledCard>
          </Box>
        ))}
      </Box>
    </FeaturedContainer>
  );
} 