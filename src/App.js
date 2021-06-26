import { CssBaseline } from '@material-ui/core'
import NavBar from './components/navbar';
import MainContainer from './components/maincontainer';
import { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';



const App = () => {

  const [fromDate, setFromDate] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    async function dataApi() {
      const url = new URL('https://api.covid19india.org/states_daily.json');
      return await fetch(url).then(response => response.json());
    }

    dataApi().then(response => {
      setFromDate(response.states_daily[0].dateymd); // get the first element's Date which is lower date from the data
      setData(response.states_daily);
    })

  }, [])

  return <MuiPickersUtilsProvider utils={MomentUtils}>
    <CssBaseline />
    <NavBar />
    <MainContainer datePickerFrom={fromDate} data={data}/>
  </MuiPickersUtilsProvider>
}

export default App;
