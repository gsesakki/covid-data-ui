import BarChartElement from './barchart';
import {useState} from 'react'
import { Container, Grid } from '@material-ui/core'
import StateDropdown from './stateddl';

const TrendChart = (props) => {
    const [reload, setReload] = useState({
        date: '',
        state: "tn"
    })

    const handleState = (state) => {
        setReload({ ...reload, state: state.toLowerCase() })
    }

    return <Container>
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <StateDropdown callbackValue={handleState} />
            </Grid>
        </Grid>
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <BarChartElement dataset={props.dataset} trendDays={10} state={reload.state}/>
            </Grid>
        </Grid>
    </Container>
}

export default TrendChart;