import { Typography, Container, Grid, Button } from '@material-ui/core'
import useStyles from '../styles';
import SpecificDateChart from './specficdatemain';
import TrendChart from './trendmain'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const MainContainer = (props) => {

    const classes = useStyles();

    return <BrowserRouter>
        <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h3" align="center" color="textPrimary">
                Covid-19 Data
            </Typography>
            <Grid container spacing={3} align="center" className={classes.button_spacing}>
                <Grid item xs={6} align="right">
                    <Link to="/">
                        <Button variant="contained" color="secondary" size="large" className={classes.button_width}>
                            Specific Date
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={6} align="left">
                    <Link to="/trend">
                        <Button variant="outlined" color="secondary" size="large" className={classes.button_width}>
                            Trends
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Switch>
                <Route path="/trend">
                    <TrendChart dataset={props.data} />
                </Route>
                <Route path="/">
                    <SpecificDateChart dataset={props.data} datePickerFrom={props.datePickerFrom} />
                </Route>
            </Switch>
        </Container>
    </BrowserRouter>
}

export default MainContainer;