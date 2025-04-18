'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, IconButton, Avatar, Chip, List, ListItem, ListItemText, Divider, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  imageUrl: string;
  timestamp: string;
}

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const PostCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  padding: theme.spacing(2, 0),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

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

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Khám phá Hạ Long qua ảnh 360 độ',
    content: 'Trải nghiệm vịnh Hạ Long với góc nhìn 360 độ tuyệt đẹp...',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/avatars/avatar1.jpg',
    },
    likes: 120,
    comments: 45,
    shares: 30,
    tags: ['Hạ Long', '360 độ', 'Du lịch'],
    imageUrl: '/images/360/canh_1.jpg',
    timestamp: '1 giờ trước',
  },
  {
    id: '2',
    title: 'Hướng dẫn sử dụng công nghệ 360 độ',
    content: 'Cách tạo và chia sẻ ảnh 360 độ cho người mới bắt đầu...',
    author: {
      name: 'Trần Thị B',
      avatar: '/images/avatars/avatar2.jpg',
    },
    likes: 89,
    comments: 23,
    shares: 15,
    tags: ['Hướng dẫn', 'Công nghệ', '360 độ'],
    imageUrl: '/images/360/canh_2.jpg',
    timestamp: '2 giờ trước',
  },
];

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShareSpaceSidebar() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [selectedProvince, setSelectedProvince] = useState<string>('');

  const handleProvinceChange = (event: SelectChangeEvent<string>) => {
    const provincePath = event.target.value;
    setSelectedProvince(provincePath);
    if (provincePath) {
      router.push(provincePath);
    }
  };

  const handlePostClick = (postId: string) => {
    router.push(`/share-space/${postId}`);
  };

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/share-space/${postId}#comments`);
  };

  const handleShare = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, shares: post.shares + 1 } : post
    ));
    // Thêm logic chia sẻ ở đây
  };

  return (
    <SidebarContainer>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Khám phá các tỉnh thành
      </Typography>
      <StyledFormControl>
        <InputLabel id="province-select-label">Chọn tỉnh thành</InputLabel>
        <Select
          labelId="province-select-label"
          id="province-select"
          value={selectedProvince}
          label="Chọn tỉnh thành"
          onChange={handleProvinceChange}
          sx={{
            '& .MuiSelect-select': {
              padding: '12px 14px',
            },
          }}
        >
          <MenuItem value="">
            <em>-- Chọn tỉnh --</em>
          </MenuItem>
          {provinces.map((province) => (
            <MenuItem key={province.id} value={province.path}>
              {province.name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Bài viết nổi bật
      </Typography>
      <List>
        {posts.map((post, index) => (
          <div key={post.id}>
            <Link href={`/share-space/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledListItem>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar src={post.author.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.timestamp}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {post.content}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton size="small">
                      <FaHeart />
                    </IconButton>
                    <Typography variant="caption">{post.likes}</Typography>
                    <IconButton size="small">
                      <FaComment />
                    </IconButton>
                    <Typography variant="caption">{post.comments}</Typography>
                    <IconButton size="small">
                      <FaShare />
                    </IconButton>
                    <Typography variant="caption">{post.shares}</Typography>
                  </Box>
                </Box>
              </StyledListItem>
            </Link>
            {index < posts.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </SidebarContainer>
  );
} 