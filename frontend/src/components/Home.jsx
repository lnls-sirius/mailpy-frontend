import React from "react";

import Typography from "@material-ui/core/Typography";

function Home() {
    return <Typography paragraph>
        EPICS PV monitoring system. Check their the specified operation values and
        send an e-mail to a list of targets with a warning message
        if the based on the specified condition.
    </Typography>;
}
export default Home;
