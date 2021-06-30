import { Container, Grid } from '@material-ui/core'
import { useState, useEffect } from 'react';
import CaseDatePicker from './datepicker';
import StateDropdown from './stateddl';
import ChartElement from './chartelement';

const SpecificDateChart = (props) => {

    const [reload, setReload] = useState({
        date: '',
        state: "tn"
    })

    useEffect(() => {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        let dateString = join(date);
        setReload({ ...reload, date: dateString.toString() })
    }, [])

    const handleDate = (date) => {
        let dateString = join(date);
        setReload({ ...reload, date: dateString.toString() })
    }

    function join(date) {
        let formatType = [{ year: 'numeric' }, { month: '2-digit' }, { day: '2-digit' }];
        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(date);
        }
        return formatType.map(format).join('-');
    }

    const handleState = (state) => {
        setReload({ ...reload, state: state.toLowerCase() })
    }

    return <Container>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} >
                <CaseDatePicker datePickerFrom={props.datePickerFrom} callbackValue={handleDate} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <StateDropdown callbackValue={handleState} />
            </Grid>
        </Grid>
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <ChartElement
                    dateValue={reload.date}
                    stateValue={reload.state}
                    dataset={props.dataset}
                />
            </Grid>
        </Grid>
    </Container>
}

export default SpecificDateChart;