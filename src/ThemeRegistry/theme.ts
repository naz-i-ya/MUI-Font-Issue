import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Lobster } from 'next/font/google';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const lobster = Lobster({
  weight:  '400',
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },

   typography: {
    // fontFamily: montserrat.style.fontFamily,
    h6: {
      fontSize: "4.875em",
      fontWeight: 400,
      lineHeight: "87px",
      color: "#fffff",
      fontFamily: montserrat.style.fontFamily,
    },
    body2: {
      fontSize: "4.5em",
      fontWeight: 400,
      lineHeight: "5.325em",
      color: '#301905',
      fontFamily: lobster.style.fontFamily,
    },
  },

});

export default theme;