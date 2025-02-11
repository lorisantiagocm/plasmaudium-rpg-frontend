'use client'

import { createTheme } from '@mui/material/styles';
import { EB_Garamond } from 'next/font/google';

const ebGaramondSans = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

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
  typography: {
    h1: {
      fontSize: 64,
      fontFamily: ebGaramondSans.style.fontFamily
    },
    h2: {
      fontSize: 56,
      fontFamily: ebGaramondSans.style.fontFamily
    }
  }
});
