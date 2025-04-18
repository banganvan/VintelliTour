'use client';

import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const attractions = [
  {
    id: 1,
    title: 'Vịnh Hạ Long',
    description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi kỳ vĩ.',
    image: '/images/provinces/halong/vinh-ha-long.jpg',
    tags: ['Di sản thế giới', 'Cảnh đẹp'],
  },
  {
    id: 2,
    title: 'Hang Sửng Sốt',
    description: 'Một trong những hang động đẹp nhất vịnh Hạ Long với hệ thống nhũ đá độc đáo.',
    image: '/images/provinces/halong/hang-sung-sot.jpg',
    tags: ['Thiên nhiên', 'Khám phá'],
  },
  {
    id: 3,
    title: 'Làng chài Cửa Vạn',
    description: 'Làng chài nổi tiếng với cuộc sống thủy cư độc đáo của người dân địa phương.',
    image: '/images/provinces/halong/lang-chai.jpg',
    tags: ['Văn hóa', 'Trải nghiệm'],
  },
  {
    id: 4,
    title: 'Đảo Tuần Châu',
    description: 'Hòn đảo đẹp với bãi biển cát trắng và các hoạt động giải trí đa dạng.',
    image: '/images/provinces/halong/tuan-chau.jpg',
    tags: ['Nghỉ dưỡng', 'Giải trí'],
  },
];

export default function HalongPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hạ Long - Kỳ quan thiên nhiên thế giới
        </Typography>
        
        <Typography variant="body1" paragraph>
          Vịnh Hạ Long, một trong những kỳ quan thiên nhiên nổi tiếng nhất thế giới, 
          là điểm đến không thể bỏ qua khi đến Việt Nam. Với hơn 1.600 hòn đảo đá vôi 
          kỳ vĩ nhô lên từ mặt nước biển xanh ngọc, Hạ Long tạo nên một bức tranh thiên 
          nhiên tuyệt đẹp và độc đáo.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Điểm đến nổi bật
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {attractions.map((attraction) => (
            <Grid item xs={12} sm={6} md={3} key={attraction.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={attraction.image}
                  alt={attraction.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {attraction.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {attraction.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {attraction.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Hoạt động du lịch
          </Typography>
          <Typography variant="body1" paragraph>
            Du khách đến Hạ Long có thể tham gia nhiều hoạt động thú vị như: du thuyền ngắm cảnh, 
            chèo kayak khám phá hang động, tắm biển, leo núi, tham quan làng chài, và thưởng thức 
            hải sản tươi sống. Đặc biệt, trải nghiệm ngủ đêm trên du thuyền giữa vịnh là một trong 
            những hoạt động được yêu thích nhất.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Ẩm thực địa phương
          </Typography>
          <Typography variant="body1" paragraph>
            Hạ Long nổi tiếng với các món hải sản tươi sống như tôm hùm, cua hoàng đế, sò điệp, 
            và các loại cá biển. Ngoài ra, du khách còn có thể thưởng thức các món ăn đặc sản như 
            chả mực Hạ Long, sá sùng, và các món ăn từ hải sản được chế biến theo nhiều cách khác nhau.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 