import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    styles: {
        global: () => ({
            ".fullsize": {
            padding: "10px",
            h:"100vh",
            w:"100vw",
            },
        }),
    },

    colors: {
    // color palette
        brand: {
            900: "#2B2D42",
            800: "#8D99AE",
            700: "#90a4bf",
            600: "#d9e2ec",
            500: "#ebeffc",
            400: "#f8fafc",
            300: "#fdfeff",
            200: "#ffffff",
            100: "#ffffff",
        },
    },

    fonts: {
    heading: "Inter",
    body: "Open Sans",
    },
});