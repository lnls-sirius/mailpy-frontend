class Entry {
    constructor(props
    ) {
        const {
            _id,
            pvname,
            unit,
            condition,
            alarm_values,
            emails,
            email_timeout,
            subject,
            group,
            warning_message
        } = props;
        this.id = _id;
        this.pvname = pvname;
        this.unit = unit;
        this.condition = condition;
        this.alarm_values = alarm_values;
        this.emails = emails;
        this.email_timeout = email_timeout;
        this.subject = subject;
        this.group = group;
        this.warning_message = warning_message;
    }
}
export default Entry;