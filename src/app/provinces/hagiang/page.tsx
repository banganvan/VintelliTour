'use client';

import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

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
    title: 'Cột cờ Lũng Cú',
    description: 'Điểm cực Bắc của Tổ quốc, nơi có cột cờ quốc gia cao 1.700m so với mực nước biển.',
    image: '/img/provinces/hagiang/cot-co-lung-cu.jpg',
    tags: ['Di tích lịch sử', 'Cảnh đẹp'],
  },
  {
    id: 2,
    title: 'Cao nguyên đá Đồng Văn',
    description: 'Công viên địa chất toàn cầu với cảnh quan đá vôi độc đáo và văn hóa dân tộc đặc sắc.',
    image: '/img/provinces/hagiang/cao-nguyen-da.jpg',
    tags: ['Di sản thế giới', 'Thiên nhiên'],
  },
  {
    id: 3,
    title: 'Dinh thự họ Vương',
    description: 'Công trình kiến trúc độc đáo của người Mông, từng là nơi ở của vua Mèo Vương Chí Sình.',
    image: '/img/provinces/hagiang/dinh-thu-vuong.jpg',
    tags: ['Văn hóa', 'Lịch sử'],
  },
  {
    id: 4,
    title: 'Mã Pí Lèng',
    description: 'Một trong tứ đại đỉnh đèo đẹp nhất Việt Nam, với cảnh quan núi non hùng vĩ.',
    image: '/img/provinces/hagiang/ma-pi-leng.jpg',
    tags: ['Cảnh đẹp', 'Khám phá'],
  },
];

export default function HagiangPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hà Giang - Vùng đất địa đầu Tổ quốc
        </Typography>
        
        <Typography variant="body1" paragraph>
          Hà Giang, tỉnh cực Bắc của Việt Nam, là vùng đất hội tụ những cảnh quan thiên nhiên hùng vĩ 
          và nền văn hóa đa dạng của các dân tộc thiểu số. Với những thửa ruộng bậc thang vàng óng, 
          những con đèo quanh co, và những bản làng yên bình, Hà Giang mang đến cho du khách những 
          trải nghiệm khó quên.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Điểm đến nổi bật
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {attractions.map((attraction) => (
            <div key={attraction.id}>
              <StyledCard>
                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
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
            </div>
          ))}
        </div>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Văn hóa và Lễ hội
          </Typography>
          <Typography variant="body1" paragraph>
            Hà Giang là nơi sinh sống của nhiều dân tộc thiểu số như Mông, Dao, Tày, Nùng... Mỗi dân tộc 
            đều có những nét văn hóa đặc sắc riêng, thể hiện qua trang phục, ẩm thực, và các lễ hội truyền 
            thống như lễ hội Gầu Tào của người Mông, lễ hội Lồng Tồng của người Tày...
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Ẩm thực địa phương
          </Typography>
          <Typography variant="body1" paragraph>
            Ẩm thực Hà Giang mang đậm bản sắc vùng cao với các món ăn đặc trưng như thắng cố, mèn mén, 
            bánh cuốn trứng, thịt trâu gác bếp, rượu ngô... Mỗi món ăn đều được chế biến từ những nguyên 
            liệu địa phương, tạo nên hương vị độc đáo khó quên.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 