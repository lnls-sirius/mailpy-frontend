import React from "react";

import { DataGrid } from "@material-ui/data-grid";

import api from "../api";

const columns = [
    {field: "name", headerName: "Name", width: 240},
    {field: "enabled", headerName: "Enabled", width: 110},
];


class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }

    updateGroups = async () => {
        const data = await api.getGroups();
        data.forEach(e=> {
            e.id = e._id;
        });
        this.setState({ groups: data });
    }

    componentDidMount() {
        this.updateGroups();
    }

    render() {
        const { groups }= this.state;
        return (
            <div style={{ height: 600, width: "100%" }}>
                <DataGrid
                    rowHeight={30} rows={groups} columns={columns} autoPageSize disableSelectionOnClick/>
            </div>
        );
    }
}

export default Groups;
