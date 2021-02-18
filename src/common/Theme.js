import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const arcPrimary = 'rgb(29, 161, 242)'
const arcPrimaryDark = 'rgb(26, 145, 218)'

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: arcPrimary,
            dark: arcPrimaryDark
        }
    },
    breakpoints: {
        md: '768px'
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        h1: {
            lineHeight: '1',
            fontWeight: '700',
            letterSpacing: '2px'
        }, 
        button: {
            color: '#fff',
            borderColor: `${arcPrimary}`,
            fontWeight: '700'
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: `${arcPrimary}`,
                '&:hover': {
                    background: `${arcPrimaryDark}`
                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;