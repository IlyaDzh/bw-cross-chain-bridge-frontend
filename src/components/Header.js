import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

import logo from "@/images/logo.png";

const useStyles = makeStyles(theme => ({
    header: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "17px",
        paddingBottom: "17px",
        minHeight: "56px",
        borderBottom: `1px solid ${theme.palette.border.main}`,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            paddingBottom: "20px"
        }
    },
    headerLogo: {
        position: "absolute",
        left: 0,
        top: 0,
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            position: "unset"
        }
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Link
                classes={{ root: classes.headerLogo }}
                href="https://bounce.finance/"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={logo} alt="Logo" />
            </Link>
            <Typography variant="h1" color="textPrimary">
                Cross-chain Bridge
            </Typography>
        </header>
    );
};
