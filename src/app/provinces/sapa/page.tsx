'use client';

import { Box, Container, Typography, Card, CardMedia, CardContent, Chip } from '@mui/material';
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
    title: 'Núi Fansipan',
    description: 'Đỉnh núi cao nhất Đông Dương với độ cao 3.143m, được mệnh danh là "Nóc nhà Đông Dương".',
    image: '/images/provinces/sapa/fansipan.jpg',
    tags: ['Thiên nhiên', 'Khám phá'],
  },
  {
    id: 2,
    title: 'Thung lũng Mường Hoa',
    description: 'Thung lũng đẹp nhất Sa Pa với ruộng bậc thang và bãi đá cổ có nhiều hình chạm khắc bí ẩn.',
    image: '/images/provinces/sapa/muong-hoa.jpg',
    tags: ['Cảnh đẹp', 'Văn hóa'],
  },
  {
    id: 3,
    title: 'Bản Cát Cát',
    description: 'Bản làng cổ của người Mông với nghề dệt thổ cẩm truyền thống và thác nước đẹp.',
    image: '/images/provinces/sapa/cat-cat.jpg',
    tags: ['Văn hóa', 'Trải nghiệm'],
  },
  {
    id: 4,
    title: 'Nhà thờ đá Sa Pa',
    description: 'Công trình kiến trúc Pháp cổ kính, biểu tượng của thị trấn Sa Pa.',
    image: '/images/provinces/sapa/nha-tho-da.jpg',
    tags: ['Di tích lịch sử', 'Kiến trúc'],
  },
];

export default function SapaPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sa Pa - Thành phố trong sương
        </Typography>
        
        <Typography variant="body1" paragraph>
          Sa Pa, thị trấn nghỉ dưỡng nổi tiếng ở độ cao 1.600m so với mực nước biển, là điểm đến lý tưởng 
          cho những ai yêu thích khí hậu mát mẻ và cảnh quan thiên nhiên hùng vĩ. Với những thửa ruộng bậc 
          thang vàng óng, những bản làng dân tộc thiểu số, và đỉnh Fansipan hùng vĩ, Sa Pa mang đến cho du 
          khách những trải nghiệm khó quên.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Điểm đến nổi bật
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {attractions.map((attraction) => (
            <StyledCard key={attraction.id}>
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
          ))}
        </div>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Văn hóa và Lễ hội
          </Typography>
          <Typography variant="body1" paragraph>
            Sa Pa là nơi sinh sống của nhiều dân tộc thiểu số như H'Mông, Dao, Tày, Giáy... Mỗi dân tộc 
            đều có những nét văn hóa đặc sắc riêng, thể hiện qua trang phục, ẩm thực, và các lễ hội truyền 
            thống như lễ hội Gầu Tào của người Mông, lễ hội Roóng Poọc của người Giáy...
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Ẩm thực địa phương
          </Typography>
          <Typography variant="body1" paragraph>
            Ẩm thực Sa Pa mang đậm bản sắc vùng cao với các món ăn đặc trưng như thắng cố, lợn cắp nách, 
            cá hồi, rau cải mèo, mận hậu, rượu táo mèo... Mỗi món ăn đều được chế biến từ những nguyên 
            liệu địa phương, tạo nên hương vị độc đáo khó quên.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 