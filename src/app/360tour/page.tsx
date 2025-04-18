'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tour360Viewer from '@/components/Tour360Viewer';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const provinces = [
  { id: 'hanoi', name: 'Hà Nội' },
  { id: 'hagiang', name: 'Hà Giang' },
  { id: 'sapa', name: 'Sa Pa' },
  { id: 'halong', name: 'Hạ Long' },
  { id: 'hue', name: 'Huế' },
  { id: 'danang', name: 'Đà Nẵng' },
  { id: 'hoian', name: 'Hội An' },
  { id: 'nhatrang', name: 'Nha Trang' },
  { id: 'dalat', name: 'Đà Lạt' },
  { id: 'phuquoc', name: 'Phú Quốc' }
];

const locations = {
  hanoi: [
    {
      id: 'hoankiem',
      title: 'Hồ Hoàn Kiếm',
      image: '/images/360/hanoi/hoankiem.jpg',
      description: 'Trái tim của thủ đô Hà Nội với tháp Rùa và đền Ngọc Sơn',
    },
    {
      id: 'vanmieu',
      title: 'Văn Miếu Quốc Tử Giám',
      image: '/images/360/hanoi/vanmieu.jpg',
      description: 'Trường đại học đầu tiên của Việt Nam',
    },
  ],
  halong: [
    {
      id: 'vịnh',
      title: 'Vịnh Hạ Long',
      image: '/images/360/halong/vinh.jpg',
      description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi',
    },
    {
      id: 'hang',
      title: 'Hang Sửng Sốt',
      image: '/images/360/halong/hang.jpg',
      description: 'Một trong những hang động đẹp nhất vịnh Hạ Long',
    },
  ],
  // Thêm các địa điểm khác cho các tỉnh khác
};

export default function Tour360Page() {
  const [selectedProvince, setSelectedProvince] = useState<string>('hanoi');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleProvinceChange = (event: SelectChangeEvent<string>) => {
    setSelectedProvince(event.target.value);
    setSelectedLocation(null);
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const currentLocations = locations[selectedProvince as keyof typeof locations] || [];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Khám phá Việt Nam 360 độ
        </Typography>
        
        <Typography variant="body1" paragraph>
          Trải nghiệm du lịch ảo với công nghệ 360 độ, khám phá những địa danh nổi tiếng
          của Việt Nam từ mọi góc nhìn.
        </Typography>

        <Box sx={{ my: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="province-select-label">Chọn tỉnh thành</InputLabel>
            <Select
              labelId="province-select-label"
              id="province-select"
              value={selectedProvince}
              label="Chọn tỉnh thành"
              onChange={handleProvinceChange}
            >
              {provinces.map((province) => (
                <MenuItem key={province.id} value={province.id}>
                  {province.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {selectedLocation ? (
          <Box sx={{ my: 4 }}>
            <Tour360Viewer
              scenes={[
                {
                  id: selectedLocation,
                  title: currentLocations.find(loc => loc.id === selectedLocation)?.title || '',
                  imageUrl: currentLocations.find(loc => loc.id === selectedLocation)?.image || '',
                }
              ]}
            />
            <Button
              variant="outlined"
              onClick={() => setSelectedLocation(null)}
              sx={{ mt: 2 }}
            >
              Quay lại danh sách
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {currentLocations.map((location) => (
              <Grid item xs={12} sm={6} md={4} key={location.id}>
                <StyledCard onClick={() => handleLocationSelect(location.id)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={location.image}
                    alt={location.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {location.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {location.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
} 