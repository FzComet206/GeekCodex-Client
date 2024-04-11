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
                minW: "1800px",
            },
            ".nav": {
                borderBottom: "1px solid",
                h: "9vh",
                w: "1800px",
                minW: "700px",
                minH: "100px"
            },
            ".content": {
                overflowY: "auto",
                h: "91vh",
                w: "1800px",
                minH: "1000px",
            }, 
            ".dash": {
                w: "400px",
            },
            ".activities": {
                maxW: "1000px",
            }, 
            ".preview": {
                minW: "350px",
                maxW: "400px",
                minH: "530px",
                maxH: "530px",
            },
            ".card": {
                minW: "320px",
                maxW: "400px",
                minH: "520px",
                maxH: "520px",
                h: "39vh",
            },
            ".form": {
                h: "92vh",
                minW: "400px",
            },
            ".button": {
                bg: "#FF2C55"
            }
        }),
    },

    colors: {
    // color palette
        brand: {
            bodyLight: "#767BA1",
            navLight: "#DBDBD2",
            pageLight: "#C7CCDB",
            cardLight: "#E5EAFA",
            cardLightT: "#FFFFFF",
            cardDark: "#445064",
            bodyDark: "#10171F",
            pageDark: "#353A47",
            cardDarkT: "#647084",
        },
    },

    fonts: {
    heading: "Inter",
    body: "Open Sans",
    },
});