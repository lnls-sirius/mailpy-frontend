import React from 'react';
import {
    MemoryRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    withRouter
} from "react-router-dom";

import api from '../api';


function EntryRow(props) {
    const {
        alarm_values,
        condition,
        email_timeout,
        emails,
        group,
        pvname,
        subject,
        unit,
        warning_message,
        _id
    } = props;
    return <tr key={_id}>
        <td>{pvname}</td>
        <td>{unit}</td>
        <td>{condition}</td>
        <td>{emails}</td>
        <td>{email_timeout}</td>
        <td>{group}</td>
        <td>{subject}</td>
        <td>{warning_message}</td>
        <td>{alarm_values}</td>
    </tr>
}

class EntriesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        }
    }

    updateEntries = async () => {
        const entries = await api.getEntries();
        this.setState({ entries: entries });
    }

    componentDidMount() {
        this.updateEntries();
    }

    renderEntriesRow = () => {
        const { entries } = this.state;
        return entries.map(entry => EntryRow(entry));
    }

    render() {
        return <table>
            <tbody>
                <tr>
                    <th>pvname</th>
                    <th>unit</th>
                    <th>condition</th>
                    <th>emails</th>
                    <th>email_timeout</th>
                    <th>group</th>
                    <th>subject</th>
                    <th>warning_message</th>
                    <th>alarm_values</th>
                </tr>
                {this.renderEntriesRow()}
            </tbody>
        </table>
    }
}
class Entries extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props, window.location.pathname); // match object
        return <div>
            <Switch>
                <Route exact path={this.props.path} component={EntriesTable}/>
            </Switch>
        </div>
    }
}
/*
function Entries(props) {
    let { path, url } = useRouteMatch();
    console.log(path,url);
    return (
        <div>
            <Switch>
                <Route path={path}>
                    <EntriesTable />
                </Route>
            </Switch>
        </div>
    );
}*/
export default withRouter(Entries);