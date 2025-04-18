'use client';

import { useState } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Grid } from '@mui/material';
import Tour360Viewer from '@/components/Tour360Viewer';
import External360Viewer from '@/components/External360Viewer';

const locations = {
  hanoi: [
    {
      id: 'hoankiem',
      title: 'Hồ Hoàn Kiếm',
      type: 'external',
      url: 'https://www.google.com/maps/embed?pb=!4v1709799977670!6m8!1m7!1sCAoSLEFGMVFpcE9NWXRqUHZQbWFKRnJJWUxkRHhyTXhxTHZxbXJMYnVLWnVHWUln!2m2!1d21.0284708!2d105.8523374!3f0!4f0!5f0.7820865974627469',
      description: 'Trái tim của thủ đô Hà Nội với tháp Rùa và đền Ngọc Sơn',
    },
    {
      id: 'vanmieu',
      title: 'Văn Miếu Quốc Tử Giám',
      type: 'external',
      url: 'https://www.google.com/maps/embed?pb=!4v1709800077549!6m8!1m7!1sCAoSLEFGMVFpcE1ZWXFxUHJhWHBVRmxkRmxhUHVDVmFyTHZxRnBJWmFJRmRJTmJK!2m2!1d21.0293713!2d105.8354296!3f0!4f0!5f0.7820865974627469',
      description: 'Trường đại học đầu tiên của Việt Nam',
    },
  ],
  halong: [
    {
      id: 'vinh',
      title: 'Vịnh Hạ Long',
      type: 'external',
      url: 'https://www.google.com/maps/embed?pb=!4v1709800147549!6m8!1m7!1sCAoSLEFGMVFpcE1nVVBJRmFJRHJJRmxkS2JJRmxkS2JJRmxkS2JJRmxkS2JJRmw!2m2!1d20.9100512!2d107.1839024!3f0!4f0!5f0.7820865974627469',
      description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi',
    },
    {
      id: 'titop',
      title: 'Đảo Ti Tốp',
      type: 'external',
      url: 'https://www.google.com/maps/embed?pb=!4v1709800197549!6m8!1m7!1sCAoSLEFGMVFpcE1nVVBJRmFJRHJJRmxkS2JJRmxkS2JJRmxkS2JJRmxkS2JJRmw!2m2!1d20.8571429!2d107.1074219!3f0!4f0!5f0.7820865974627469',
      description: 'Hòn đảo xinh đẹp với bãi tắm và view toàn cảnh vịnh',
    },
  ],
  // Thêm các địa điểm khác ở đây
};

export default function Tour360Page() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleLocationChange = (event: SelectChangeEvent) => {
    const location = event.target.value;
    setSelectedLocation(location);
    if (locations[location as keyof typeof locations]?.length > 0) {
      setSelectedPlace(locations[location as keyof typeof locations][0]);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Khám phá Việt Nam 360 độ
      </Typography>
      <Typography variant="subtitle1" paragraph align="center" color="text.secondary">
        Trải nghiệm du lịch ảo với công nghệ 360 độ, khám phá những địa danh nổi tiếng của Việt Nam từ mọi góc nhìn.
      </Typography>

      <Box sx={{ my: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="location-select-label">Chọn tỉnh thành</InputLabel>
          <Select
            labelId="location-select-label"
            id="location-select"
            value={selectedLocation}
            label="Chọn tỉnh thành"
            onChange={handleLocationChange}
          >
            <MenuItem value="">
              <em>-- Chọn tỉnh thành --</em>
            </MenuItem>
            {Object.keys(locations).map((location) => (
              <MenuItem key={location} value={location}>
                {location === 'hanoi' ? 'Hà Nội' : 
                 location === 'halong' ? 'Hạ Long' : location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {selectedPlace && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {selectedPlace.title}
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            {selectedPlace.description}
          </Typography>
          <External360Viewer 
            url={selectedPlace.url}
            title={selectedPlace.title}
          />
        </Box>
      )}

      {!selectedPlace && (
        <Box 
          sx={{ 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Vui lòng chọn một địa điểm để xem tour 360°
          </Typography>
        </Box>
      )}
    </Container>
  );
} 