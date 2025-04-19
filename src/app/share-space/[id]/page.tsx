'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import { Box, Container, Typography, Avatar, Chip, IconButton, TextField, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaHeart, FaComment, FaShare, FaReply } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Lazy load Tour360Viewer
const Tour360Viewer = dynamic(() => import('@/components/Tour360Viewer'), {
  ssr: false,
  loading: () => (
    <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography>Đang tải viewer...</Typography>
    </Box>
  ),
});

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

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
  commentsList: Comment[];
}

const PostContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const CommentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const CommentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

// Tách component Comment để tối ưu render
const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
        <Avatar src={comment.author.avatar} />
        <Box>
          <Typography variant="subtitle1">{comment.author.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {comment.timestamp}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ ml: 7 }}>
        {comment.content}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, ml: 7, mt: 1 }}>
        <IconButton size="small">
          <FaHeart />
        </IconButton>
        <Typography variant="caption">{comment.likes}</Typography>
        <IconButton size="small">
          <FaReply />
        </IconButton>
      </Box>

      {comment.replies.map((reply) => (
        <Box key={reply.id} sx={{ ml: 7, mt: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
            <Avatar src={reply.author.avatar} />
            <Box>
              <Typography variant="subtitle1">{reply.author.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {reply.timestamp}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ ml: 7 }}>
            {reply.content}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, ml: 7, mt: 1 }}>
            <IconButton size="small">
              <FaHeart />
            </IconButton>
            <Typography variant="caption">{reply.likes}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

// Tách component PostHeader để tối ưu render
const PostHeader = ({ post }: { post: Post }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Avatar src={post.author.avatar} alt={post.author.name} sx={{ width: 56, height: 56, mr: 2 }} />
      <Box>
        <Typography variant="h6">{post.author.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Đã đăng 2 giờ trước
        </Typography>
      </Box>
    </Box>
  );
};

// Tách component PostActions để tối ưu render
const PostActions = ({ post, onLike, onShare }: { post: Post; onLike: () => void; onShare: () => void }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <IconButton onClick={onLike} sx={{ color: 'red' }}>
        <FaHeart />
      </IconButton>
      <Typography>{post.likes}</Typography>

      <IconButton>
        <FaComment />
      </IconButton>
      <Typography>{post.comments}</Typography>

      <IconButton onClick={onShare}>
        <FaShare />
      </IconButton>
      <Typography>{post.shares}</Typography>
    </Box>
  );
};

// Tách component CommentForm để tối ưu render
const CommentForm = ({ onSubmit, value, onChange }: { 
  onSubmit: () => void; 
  value: string; 
  onChange: (value: string) => void;
}) => {
  return (
    <CommentBox>
      <Avatar src="/img/avatars/default.jpg" />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Viết bình luận..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        multiline
        rows={2}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        disabled={!value.trim()}
      >
        Đăng
      </Button>
    </CommentBox>
  );
};

const samplePost: Post = {
  id: '1',
  title: 'Khám phá Hạ Long qua ảnh 360 độ',
  content: 'Trải nghiệm vịnh Hạ Long với góc nhìn 360 độ tuyệt đẹp. Khám phá các hang động, đảo đá và làng chài nổi tiếng của vịnh Hạ Long qua công nghệ 360 độ.',
  author: {
    name: 'Nguyễn Văn A',
    avatar: '/img/avatars/avatar1.jpg',
  },
  likes: 120,
  comments: 45,
  shares: 30,
  tags: ['Hạ Long', '360 độ', 'Du lịch'],
  imageUrl: '/img/360/canh_1.jpg',
  commentsList: [
    {
      id: '1',
      author: {
        name: 'Trần Thị B',
        avatar: '/img/avatars/avatar2.jpg',
      },
      content: 'Cảnh đẹp quá! Mình cũng muốn đi thử trải nghiệm này.',
      timestamp: '2 giờ trước',
      likes: 5,
      replies: [
        {
          id: '2',
          author: {
            name: 'Nguyễn Văn A',
            avatar: '/img/avatars/avatar1.jpg',
          },
          content: 'Cảm ơn bạn! Bạn nên đi vào mùa thu, thời tiết rất đẹp.',
          timestamp: '1 giờ trước',
          likes: 2,
          replies: [],
        },
      ],
    },
  ],
};

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a shorter delay
    const timer = setTimeout(() => {
      setPost(samplePost);
      setIsLoading(false);
    }, 200); // Giảm thời gian delay xuống 200ms

    return () => clearTimeout(timer);
  }, [params.id]);

  const handleLike = () => {
    if (post) {
      setPost({ ...post, likes: post.likes + 1 });
    }
  };

  const handleShare = () => {
    if (post) {
      setPost({ ...post, shares: post.shares + 1 });
    }
  };

  const handleComment = () => {
    if (post && newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        author: {
          name: 'Người dùng hiện tại',
          avatar: '/img/avatars/default.jpg',
        },
        content: newComment,
        timestamp: 'Vừa xong',
        likes: 0,
        replies: [],
      };

      setPost({
        ...post,
        comments: post.comments + 1,
        commentsList: [...post.commentsList, newCommentObj],
      });

      setNewComment('');
    }
  };

  if (isLoading) {
    return null; // Sử dụng loading.tsx thay vì hiển thị loading ở đây
  }

  if (!post) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <Typography>Không tìm thấy bài viết</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <PostContainer>
        <PostHeader post={post} />

        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>

        <Box sx={{ mb: 3 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>

        <Typography variant="body1" paragraph>
          {post.content}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Suspense fallback={<div>Đang tải viewer...</div>}>
            <Tour360Viewer scenes={[{
              id: 'scene1',
              title: post.title,
              image: post.imageUrl,
              hotspots: []
            }]} />
          </Suspense>
        </Box>

        <PostActions post={post} onLike={handleLike} onShare={handleShare} />

        <Divider sx={{ my: 3 }} />

        <CommentContainer>
          <Typography variant="h6" gutterBottom>
            Bình luận
          </Typography>

          <CommentForm 
            onSubmit={handleComment}
            value={newComment}
            onChange={setNewComment}
          />

          {post.commentsList.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </CommentContainer>
      </PostContainer>
    </Container>
  );
} 