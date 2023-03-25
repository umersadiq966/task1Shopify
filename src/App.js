import React from 'react';
import Grid from '@mui/material/Grid';
import './App.css';

import { SideMenu } from './Components/SideMenu/SideMenu';
import { Header } from './Components/Header/Header';
import { Body } from './Components/Body/Body';

const App = () => {
  return (
    <Grid className='mainContainer' container>
      <SideMenu/>
      <Header />
      <Body />
    </Grid>
  );
}

export default App;
