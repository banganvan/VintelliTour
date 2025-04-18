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
    title: 'Hồ Hoàn Kiếm',
    description: 'Trái tim của thủ đô Hà Nội, nơi gắn liền với truyền thuyết vua Lê Lợi trả gươm thần.',
    image: '/images/provinces/hanoi/ho-hoan-kiem.jpg',
    tags: ['Di tích lịch sử', 'Cảnh đẹp'],
  },
  {
    id: 2,
    title: 'Văn Miếu Quốc Tử Giám',
    description: 'Trường đại học đầu tiên của Việt Nam, biểu tượng của nền giáo dục nước nhà.',
    image: '/images/provinces/hanoi/van-mieu.jpg',
    tags: ['Di tích lịch sử', 'Văn hóa'],
  },
  {
    id: 3,
    title: 'Phố cổ Hà Nội',
    description: 'Khu phố cổ với 36 phố phường, nơi lưu giữ nét đẹp văn hóa truyền thống.',
    image: '/images/provinces/hanoi/pho-co.jpg',
    tags: ['Văn hóa', 'Ẩm thực'],
  },
  {
    id: 4,
    title: 'Lăng Chủ tịch Hồ Chí Minh',
    description: 'Nơi an nghỉ của vị lãnh tụ vĩ đại của dân tộc Việt Nam.',
    image: '/images/provinces/hanoi/lang-bac.jpg',
    tags: ['Di tích lịch sử', 'Văn hóa'],
  },
];

export default function HanoiPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hà Nội - Thủ đô ngàn năm văn hiến
        </Typography>
        
        <Typography variant="body1" paragraph>
          Hà Nội, thủ đô của Việt Nam, là một thành phố có bề dày lịch sử hơn 1000 năm. 
          Nơi đây hội tụ những giá trị văn hóa truyền thống và hiện đại, tạo nên một không gian 
          sống động và đa dạng. Từ những con phố cổ kính đến những công trình kiến trúc hiện đại, 
          Hà Nội luôn mang đến cho du khách những trải nghiệm khó quên.
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
            Ẩm thực Hà Nội
          </Typography>
          <Typography variant="body1" paragraph>
            Hà Nội nổi tiếng với nền ẩm thực phong phú và đa dạng. Từ phở, bún chả, bánh cuốn 
            đến cốm làng Vòng, bánh tôm Hồ Tây, mỗi món ăn đều mang đậm hương vị đặc trưng của 
            thủ đô. Du khách có thể thưởng thức những món ngon này tại các quán ăn nhỏ ven đường 
            hoặc những nhà hàng sang trọng.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Văn hóa và Lễ hội
          </Typography>
          <Typography variant="body1" paragraph>
            Hà Nội là nơi diễn ra nhiều lễ hội truyền thống như lễ hội đền Ngọc Sơn, lễ hội chùa 
            Hương, lễ hội đền Gióng... Mỗi lễ hội đều mang đậm bản sắc văn hóa dân tộc và thu hút 
            đông đảo du khách tham gia.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 