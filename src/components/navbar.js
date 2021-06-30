import { Typography, AppBar, Toolbar } from '@material-ui/core'
import PollSharpIcon from '@material-ui/icons/PollSharp';
import useStyles from '../styles';

const NavBar = () => {
    const classes = useStyles();
    return <AppBar position="relative">
        <Toolbar>
            <PollSharpIcon className={classes.icons} />
            <Typography variant="h6" >Data Analytics</Typography>
        </Toolbar>
    </AppBar>
}

export default NavBar;