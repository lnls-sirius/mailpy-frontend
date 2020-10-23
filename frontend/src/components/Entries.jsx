import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  withRouter,
} from "react-router-dom";

import EntriesTable from "./EntriesTable";

class Entries extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props, window.location.pathname); // match object
    return (
      <div>
        <Switch>
          <Route exact path={this.props.path} component={EntriesTable} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Entries);
