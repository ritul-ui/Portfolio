import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import DrawerAppBar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = ({ refs }) => {
  // const navigate = useNavigate();
  const homeRef = useRef(null);


  return (
    <Box
      ref={homeRef}
      width={"100%"}
      sx={{
        height: { xs: "calc(100vh - 54px)", sm: "calc(100vh - 64px)" }
      }}
      id="home"
    >
      <Hero refs={refs}/>
    </Box>
  );
};

export default Home;
