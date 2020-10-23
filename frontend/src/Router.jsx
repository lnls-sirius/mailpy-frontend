import React from "react";

import {
    MemoryRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Entries from "./components/Entries";
import Groups from "./components/Groups";
import Conditions from "./components/Conditions";
import Home from "./components/Home";

function AppRouterButtons(props) {
    const { classes } = props;
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {[
                    {name: "Home", target: "/home"},
                    {name: "Entries", target: "/entries"},
                    {name: "Groups", target: "/groups"},
                    {name: "Conditions", target: "/conditions"}
                ].map((e) => (
                    <Link style={{ textDecoration: "none" }} to={e.target} key={e.name}>
                        <ListItem variant="outlined" color="primary" button key={e.name}>
                            <ListItemText primary={e.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}
AppRouterButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

function AppRouter(props) {
    const { classes } = props;
    return (
        <Router basename={window.location.pathname}>
            <AppRouterButtons classes={classes}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/entries" component={Entries} />
                    <Route path="/groups" component={Groups} />
                    <Route path="/conditions" component={Conditions} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
AppRouter.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default AppRouter;
