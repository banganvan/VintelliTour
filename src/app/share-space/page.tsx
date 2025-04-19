'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, IconButton, Grid } from '@mui/material';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: '1',
    title: 'Khám phá Hạ Long qua ảnh 360 độ',
    content: 'Trải nghiệm vịnh Hạ Long với góc nhìn 360 độ tuyệt đẹp...',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/img/avatars/avatar1.jpg',
    },
    likes: 120,
    comments: 45,
    shares: 30,
    imageUrl: '/img/360/canh_1.jpg',
  },
  {
    id: '2',
    title: 'Cách tạo và chia sẻ ảnh 360 độ cho người mới bắt đầu',
    content: 'Hướng dẫn chi tiết cách tạo ảnh 360 độ...',
    author: {
      name: 'Trần Thị B',
      avatar: '/img/avatars/avatar2.jpg',
    },
    likes: 89,
    comments: 23,
    shares: 15,
    imageUrl: '/img/360/canh_2.jpg',
  },
];

const IconBox = ({ icon: Icon, count, color }: { icon: any; count: number; color: string }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        color: color,
        transform: 'scale(1.1)',
      }
    }}
  >
    <Icon />
    <Typography variant="body2">{count}</Typography>
  </Box>
);

export default function ShareSpacePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Không gian chia sẻ
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid component="div" item xs={12} md={6} key={post.id}>
            <Link href={`/share-space/${post.id}`} style={{ textDecoration: 'none' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
                  }
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  />
                </Box>
                <CardContent>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 2,
                      '&:hover': {
                        '& .MuiAvatar-root': {
                          transform: 'scale(1.1)',
                        }
                      }
                    }}
                  >
                    <Avatar 
                      src={post.author.avatar} 
                      sx={{ 
                        mr: 2,
                        transition: 'transform 0.2s ease-in-out',
                      }} 
                    />
                    <Typography 
                      variant="subtitle1"
                      sx={{
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      {post.author.name}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      transition: 'color 0.2s ease-in-out',
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.content}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
                    <IconBox icon={FaHeart} count={post.likes} color="#ff4081" />
                    <IconBox icon={FaComment} count={post.comments} color="#2196f3" />
                    <IconBox icon={FaShare} count={post.shares} color="#4caf50" />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 