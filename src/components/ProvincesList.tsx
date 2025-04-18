'use client';

import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const provinces = [
  { id: 'hanoi', name: 'Hà Nội', path: '/provinces/hanoi' },
  { id: 'hagiang', name: 'Hà Giang', path: '/provinces/hagiang' },
  { id: 'sapa', name: 'Sa Pa', path: '/provinces/sapa' },
  { id: 'halong', name: 'Hạ Long', path: '/provinces/halong' },
  { id: 'hue', name: 'Huế', path: '/provinces/hue' },
  { id: 'danang', name: 'Đà Nẵng', path: '/provinces/danang' },
  { id: 'hoian', name: 'Hội An', path: '/provinces/hoian' },
  { id: 'nhatrang', name: 'Nha Trang', path: '/provinces/nhatrang' },
  { id: 'dalat', name: 'Đà Lạt', path: '/provinces/dalat' },
  { id: 'phuquoc', name: 'Phú Quốc', path: '/provinces/phuquoc' }
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
  '& .MuiListItemText-primary': {
    fontWeight: 500,
  },
}));

export default function ProvincesList() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Khám phá các tỉnh thành
      </Typography>
      <List>
        {provinces.map((province, index) => (
          <div key={province.id}>
            <Link href={province.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledListItem>
                <ListItemText primary={province.name} />
              </StyledListItem>
            </Link>
            {index < provinces.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  );
} 