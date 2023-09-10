import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6543',
            light: '#E76F51',
            // dark: will be calculated
            contrastText: '#fff',
        },
        secondary: {
            main: '#264653',
            //light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#fff',
        },
    },
});