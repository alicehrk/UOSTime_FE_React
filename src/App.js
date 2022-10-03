import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField
          margin="normal"
          label="아이디"
          required
          fullWidth
          name="id"
          autoComplete="email"
          autoFocus
        />
        <TextField
          sx={{ mb: 1 }}
          label="비밀번호"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="자동 로그인"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>

        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          sx={{ margin: 'normal' }}
        >
          아이디 / 패스워드가 기억나지 않는다면?
        </Link>

        <Link style={{ textDecoration: 'none', color: 'black' }}>
          아직 계정이 없다면 가입하기!
        </Link>
      </Box>
    </Container>
  );
}
