import React from 'react';

import api from '../api';

function Entry(props) {
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

class Entries extends React.Component {
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

    renderEntries = () => {
        const { entries } = this.state;
        return entries.map(entry => Entry(entry));
    }

    render() {
        return <div>
            <table>
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
                    {this.renderEntries()}
                </tbody>
            </table>
        </div>;
    }
}
export default Entries;