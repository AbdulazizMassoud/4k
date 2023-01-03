import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css';

import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect';

const theme = extendTheme({
    colors: {
        gray: {
            50: "#E2E2E2",
            300: "#696969",
            500: "#303030",
            600: "#242424",
            700: "#151515",
        }
    },
    fonts: {
        heading: 'Open Sans',
        body: 'Open Sans',
    },
    styles: {
     global: (props: StyleFunctionProps) => ({
         body: {
             bg: props.theme.colors.gray[700],
             margin: "20px 30px 50px",
             marginLeft: isMobile ? "30px" : "60px"
         }
     })
    },
});

export default theme