// pages/freshers/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FreshersIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/freshers/map');
  }, [router]);

  return (
    <Box height="100vh" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default FreshersIndex;
