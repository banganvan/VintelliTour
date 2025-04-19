'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';

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
    image: '/img/destinations/halong.jpg',
    link: '/provinces/halong',
  },
  {
    id: '2',
    title: 'Phố cổ Hội An',
    description: 'Thành phố cổ kính với kiến trúc độc đáo và văn hóa truyền thống phong phú.',
    image: '/img/destinations/hoian.jpg',
    link: '/provinces/hoian',
  },
  {
    id: '3',
    title: 'Sa Pa',
    description: 'Thị trấn miền núi với ruộng bậc thang và văn hóa dân tộc thiểu số.',
    image: '/img/destinations/sapa.jpg',
    link: '/provinces/sapa',
  },
  {
    id: '4',
    title: 'Đà Lạt',
    description: 'Thành phố ngàn hoa với khí hậu mát mẻ và cảnh quan thiên nhiên tuyệt đẹp.',
    image: '/img/destinations/dalat.jpg',
    link: '/provinces/dalat',
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
              <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Box>
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