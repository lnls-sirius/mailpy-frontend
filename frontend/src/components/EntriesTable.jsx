import React from "react";

import { DataGrid } from "@material-ui/data-grid";

import api from "../api";

const columns = [
    {field: "pvname", headerName: "PV Name", width: 260},
    {field: "unit", headerName: "Unit", width: 120},
    {field: "condition", headerName: "Condition", width: 140},
    {field: "alarm_values", headerName: "Value Range", width: 260},
    {field: "emails", headerName: "E-mails", width: 300},
    {field: "email_timeout", headerName: "E-Mail Timeout", width: 160},
    {field: "group", headerName: "Group", width: 120},
    {field: "subject", headerName: "Subject", width: 400},
    {field: "warning_message", headerName: "Warning Message", width: 550},
];

class EntriesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }

    updateEntries = async () => {
        const entries = await api.getEntries();
        entries.forEach(e=> {
            e.id = e._id;
        });
        this.setState({ entries: entries });
    }

    componentDidMount() {
        this.updateEntries();
    }

    render() {
        const { entries }= this.state;
        return (
            <div style={{ height: 600, width: "100%" }}>
                <DataGrid
                    rowHeight={30} rows={entries} columns={columns} autoPageSize disableSelectionOnClick/>
            </div>
        );
    }
}


export default EntriesTable;
