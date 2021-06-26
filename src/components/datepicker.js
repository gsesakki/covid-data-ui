import { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import useStyles from "../styles";

const CaseDatePicker = (props) => {

    const classes = useStyles();
    const today = new Date();
    // let yesterday = new Date();
    // yesterday = yesterday.setDate(new Date() -1);
    const [dateddl, setDateddl] = useState(join(today));

    const handleDateChange = (e) => {
        setDateddl(new Date(e._d));
        props.callbackValue(e._d);
    }

    function join(date) {
        let formatType = [{year: 'numeric'},  {month: '2-digit'}, {day: '2-digit'} ];
        function format(m) {
           let f = new Intl.DateTimeFormat('en', m);
           return f.format(date);
        }
        return formatType.map(format).join('-');
    }

    // const onAcceptDate = (date) => {
    //     // DO Nothing
    // }

    return <DatePicker
        views={["year", "month", "date"]}
        label="Select the Date"
        helperText="date when data to be extracted"
        autoOk={true}
        variant="inline"
        minDate={new Date(props.datePickerFrom)}
        maxDate={today}
        value={dateddl}
        // onAccept={onAcceptDate}
        onChange={handleDateChange}
        className={classes.spacing_left_3}
    />
}

export default CaseDatePicker;