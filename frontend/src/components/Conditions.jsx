import React from 'react';

import api from '../api';

function Condition(props) {
    const {
        name,
        desc,
        _id
    } = props;
    return <tr key={_id}>
        <td>{name}</td>
        <td>{desc}</td>
    </tr>
}

class Conditions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: []
        }
    }

    updateConditions = async () => {
        const conditions = await api.getConditions();
        this.setState({ conditions: conditions });
    }

    componentDidMount() {
        this.updateConditions();
    }

    renderConditions = () => {
        const { conditions } = this.state;
        return conditions.map(condition => Condition(condition));
    }

    render() {
        return <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {this.renderConditions()}
                </tbody>
            </table>
        </div>;
    }
}
export default Conditions;