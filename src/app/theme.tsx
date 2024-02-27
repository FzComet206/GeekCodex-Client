import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    styles: {
        global: () => ({
            ".fullsize": {
                padding: "10px",
                h:"100vh",
                w:"100vw",
            },

            ".body": {
                h: "100vh",
                w: "80vw",
            },
            ".menu": {
                h: "100vh",
                w: "20vw"
            },
            ".navbar": {
                padding: "10px",
                h: "8vh",
                w: "80vw"
            },
            ".content": {
                h: "92vh",
                w: "80vw"
            }, 
            ".preview": {
                h: "26vh",
                w: "14vw"
            }
        }),
    },

    colors: {
    // color palette
        brand: {
            900: "#2B2D42",
            800: "#F2DDA4",
            700: "#6E698E",
            600: "#A7ADC6",
            500: "#2D3142",
            400: "#f8fafc",
            300: "#2E294E",
            200: "#ffffff",
            100: "#ffffff",
        },
    },

    fonts: {
    heading: "Inter",
    body: "Open Sans",
    },
});