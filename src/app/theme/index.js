'use client'

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#3bbfd6',
      main: '#0aafcc',
      dark: '#077a8e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#000',
    },
  },
});
