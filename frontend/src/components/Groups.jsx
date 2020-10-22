import React from 'react';

import api from '../api';

function Group(props) {
    const {
        name,
        enabled,
        _id
    } = props;
    return <tr key={_id}>
        <td>{name}</td>
        <td>{enabled ? 'Enabled' : 'Disabled'}</td>
    </tr>
}

class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        }
    }

    updateGroups = async () => {
        const data = await api.getGroups();
        this.setState({ groups: data });
    }

    componentDidMount() {
        this.updateGroups();
    }

    renderGroups = () => {
        const { groups } = this.state;
        return groups.map(group => Group(group));
    }

    render() {
        return <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Enabled</th>
                    </tr>
                    {this.renderGroups()}
                </tbody>
            </table>
        </div>;
    }
}
export default Groups;