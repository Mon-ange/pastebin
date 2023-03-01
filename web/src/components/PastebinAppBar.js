import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import { lightBlue } from '@mui/material/colors';

export default function PastebinAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  color='default' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            href="/"
            sx={{ mr: 2 }}
          >
            <AdbIcon />
            <Typography variant="h6" component="div" >
            Pastebin
            </Typography>
          </IconButton>
          
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/page">Pasted</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}