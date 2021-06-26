import { Typography, Container, Grid, Button } from '@material-ui/core'
import { useState } from 'react';
import useStyles from '../styles';
import CaseDatePicker from './datepicker';
import StateDropdown from './stateddl';
import ChartElement from './chartelement';
import BarChartElement from './barchart';

const MainContainer = (props) => {

    const classes = useStyles();
    const [reload, setReload] = useState({
        date: new Date(),
        state: "tn"
    })

    const handleDate = (date) => {
        let dateString = join(date);
        setReload({ ...reload, date: dateString.toString() })
        // console.log(`Reloaded the Date Value :: ${dateString.toString()}`);
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
        // console.log(`Reloaded the state value :: ${reload.state}`);
    }

    return <main>
        <div>
            <Container maxWidth="sm" className={classes.container}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    Covid-19 Data
                </Typography>
                <Grid container spacing={3} align="center" className={classes.button_spacing}>
                    <Grid item xs={6} align="right">
                        <Button variant="contained" color="primary" size="large" className={classes.button_width}>
                            Specific Date
                        </Button>
                    </Grid>
                    <Grid item xs={6} align="left">
                        <Button variant="outlined" color="primary" size="large" className={classes.button_width}>
                            Trends
                        </Button>
                    </Grid>
                </Grid>
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
                            dataset={props.data}
                        />
                        <BarChartElement dataset={props.data} trendDays={10}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </main>
}

export default MainContainer;