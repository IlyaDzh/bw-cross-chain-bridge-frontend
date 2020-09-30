import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                border: "1px solid #000"
            },
            outlinedSizeLarge: {
                boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
                "&:disabled": {
                    boxShadow: "unset"
                }
            },
            sizeLarge: {
                maxWidth: "220px",
                width: "100%",
                height: "60px",
                fontSize: "24px"
            },
            sizeSmall: {
                maxWidth: "82px",
                width: "100%",
                height: "32px",
                fontSize: "15px"
            }
        }
    },
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#7A7A81"
        },
        text: {
            primary: "#000",
            secondary: "#7a7a81"
        },
        border: {
            main: "#000"
        }
    },
    typography: {
        allVariants: {
            color: "#000"
        },
        button: {
            textTransform: "none"
        },
        h1: {
            fontSize: "32px",
            "@media (max-width: 960px)": {
                fontSize: "28px"
            }
        },
        h2: {
            fontSize: "24px",
            lineHeight: "31px"
        },
        h3: {
            fontSize: "22px"
        },
        h4: {
            fontSize: "18px"
        },
        body2: {
            fontSize: "15px",
            lineHeight: "18px",
            "@media (max-width: 960px)": {
                fontSize: "14px"
            }
        },
        caption: {
            fontSize: "12px",
            color: "#7a7a81"
        },
        fontFamily: "Suisse Intl Regular"
    }
});
