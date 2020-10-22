import React from 'react';
import { MemoryRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import Entries from './components/Entries';
import Groups from './components/Groups';
import Conditions from './components/Conditions';

export default props => (
    <Router basename={window.location.pathname}>
        <div>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/entries"><button>Entries</button></Link>
            <Link to="/groups"><button>Groups</button></Link>
            <Link to="/conditions"><button>Conditions</button></Link>
        </div>
        <Switch>
            <Route exact path="/">
              <h2>Home</h2>
            </Route>
            <Route path="/entries" component={Entries} />
            <Route path="/groups" component={Groups} />
            <Route path="/conditions" component={Conditions} />
            <Route path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>
    </Router>
);
