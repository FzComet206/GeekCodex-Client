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
                h: "92vh",
                w: "70vw",
            },
            ".navbar": {
                borderBottom: "1px solid",
                h: "8vh",
                w: "70vw",
            },
            ".content": {
                h: "92vh",
                w: "70vw"
            }, 
            ".preview": {
                h: "40vh",
                w: "15vw"
            },
            ".card": {
                maxW: "18vw",
                h: "39vh"
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
            bodyLight: "#55505C",
            navLight: "FBFBF2",
            pageLight: "#E7E7E7",
            cardLight: "#F6F0ED",
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