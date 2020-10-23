import React from "react";

import {
  MemoryRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            {name:'Home', target:'/home'},
            {name: 'Entries', target:'/entries'},
            {name:'Groups', target: '/groups'},
            {name:'Conditions', target: '/conditions'}
        ].map((e, index) => (
        <Link style={{ textDecoration: "none" }} to={e.target}>
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
export default AppRouter;
