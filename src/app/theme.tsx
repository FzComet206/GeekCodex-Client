import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    styles: {
        global: () => ({
            ".fullsize": {
                h:"100%",
                w:"100%",
            },

            ".body": {
                overflow: "hidden",
                h: "92vh",
                w: "70vw",
            },
            ".nav": {
                overflow: "hidden",
                borderBottom: "1px solid",
                h: "8vh",
                w: "70vw",
            },
            ".content": {
                overflow: "hidden",
                h: "92vh",
                w: "70vw",
            }, 
            ".preview": {
                minW: "200px",
                h: "40vh",
                w: "15.3vw"
            },
            ".card": {
                minW: "500px",
                h: "39vh",
                w: "14.5vw"
            },
            ".form": {
                h: "92vh",
                w: "30vw"
            },
        }),
    },

    colors: {
    // color palette
        brand: {
            bodyLight: "#55555C",
            navLight: "FBFBF2",
            pageLight: "#D7D7D7",
            cardLight: "#E6E0ED",
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