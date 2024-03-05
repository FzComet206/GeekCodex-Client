import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    styles: {
        global: () => ({
            ".fullsize": {
                h:"100%",
                w:"100%",
            },

            ".body": {
                h: "91vh",
                w: "1800px",
            },
            ".nav": {
                overflow: "hidden",
                borderBottom: "1px solid",
                h: "9vh",
                w: "1800px",
                minW: "700px",
                minH: "100px"
            },
            ".content": {
                h: "91vh",
                w: "1800px",
                minH: "1000px",
            }, 
            ".preview": {
                minW: "350px",
                maxW: "400px",
                minH: "500px",
                h: "40vh",
            },
            ".card": {
                minW: "320px",
                maxW: "400px",
                minH: "500px",
                h: "39vh",
            },
            ".form": {
                h: "92vh",
                minW: "400px",
            },
        }),
    },

    colors: {
    // color palette
        brand: {
            bodyLight: "#FF5966",
            navLight: "#DBDBD2",
            pageLight: "#F8F4E3",
            cardLight: "#C6E7FF",
            navDark: "#171D1C",
            cardDark: "#343434",
            bodyDark: "#151718",
            pageDark: "#1F1F1F",
            400: "#FEEFDD",
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