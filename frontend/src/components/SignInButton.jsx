import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import {
    signIn as ActionSignIn,
    signOut as ActionSignOut,
} from "../actions/Actions";

import { green, red } from "@material-ui/core/colors";

const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[600]),
        backgroundColor: red[500],
        "&:hover": {
            backgroundColor: red[700],
        },
    },
}))(ListItem);

const GreenButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[600]),
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
    },
}))(ListItem);

const SignInButton = () => {
    const identity = useSelector((state) => state.identity);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(identity ? ActionSignOut() : ActionSignIn());
    };

    const renderButton = () => {
        if (identity) {
            return (
                <RedButton button onClick={onClickHandler}>
                    <ListItemText>Sign Out</ListItemText>
                </RedButton>
            );
        } else {
            return (
                <GreenButton button onClick={onClickHandler}>
                    <ListItemText>Sign In</ListItemText>
                </GreenButton>
            );
        }
    };

    return <React.Fragment>{renderButton()}</React.Fragment>;
};

export default SignInButton;
