import React from "react";
import { TextField, MenuItem, Hidden, makeStyles } from "@material-ui/core";

import { WalletIcon } from "@/icons/WalletIcon";
import { WalletSmallIcon } from "@/icons/WalletSmallIcon";

const useStyles = makeStyles(theme => ({
    transferWalletWrapper: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            "&:first-child": {
                marginBottom: "32px"
            },
            "&:last-child": {
                marginTop: "32px"
            }
        }
    },
    transferWalletSelect: {
        display: "flex",
        marginBottom: "32px",
        [theme.breakpoints.down("sm")]: {
            alignItems: "flex-end",
            marginBottom: "24px"
        }
    },
    transferWalletSelectIcon: {
        marginRight: "42px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "15px",
            marginBottom: "-4px"
        }
    },
    transferWalletAddress: {
        marginBottom: "16px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "12px"
        }
    }
}));

export const TransferWallet = ({
    walletValue,
    walletNode,
    walletError,
    onChangeInput,
    onChangeSelect,
    disabled,
    inputLabel,
    withCaption
}) => {
    const classes = useStyles();

    return (
        <div className={classes.transferWalletWrapper}>
            <div className={classes.transferWalletSelect}>
                <div className={classes.transferWalletSelectIcon}>
                    <Hidden smDown>
                        <WalletIcon />
                    </Hidden>
                    <Hidden mdUp>
                        <WalletSmallIcon />
                    </Hidden>
                </div>
                <TextField
                    select
                    label="Mainnet Type"
                    value={walletNode}
                    onChange={onChangeSelect}
                    fullWidth
                >
                    <MenuItem value="ETH">Ethereum Mainnet</MenuItem>
                    <MenuItem value="BSC">Binance Smart Chain</MenuItem>
                </TextField>
            </div>
            <div className={classes.transferWalletAddress}>
                <TextField
                    label={inputLabel}
                    variant="outlined"
                    value={walletValue}
                    onChange={onChangeInput}
                    error={Boolean(walletError)}
                    helperText={walletError}
                    disabled={disabled}
                    fullWidth
                />
            </div>
            {/* {withCaption && (
                <>
                    <Typography variant="caption" display="block">
                        Commission fee is 11.11 BOT
                    </Typography>
                    <Typography variant="caption" display="block">
                        Please note that the transferred sum should not be less than
                        commission fee!
                    </Typography>
                </>
            )} */}
        </div>
    );
};
