import { useEffect, useState } from 'react'
// import useStyles from '../styles'
import CanvasJSReact from '../assets/canvasjs.react';
import { statesData } from './statesdata';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartElement = (props) => {

  const [status, setStatus] = useState({
    state: "",
    confirmed: 0,
    recovered: 0,
    deceased: 0
  })

  const stateName = (code) => {
    const states = statesData.states.filter(state => state.code === code.toUpperCase());
    return states.length ? states[0].name : "Tamil Nadu";
  }

  const options = {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: `Cases for ${status.state}`,
      fontSize: 24,
    },
    subtitles: [{
      // text: `${status.percentage} Positive`,
      verticalAlign: "left",
      fontSize: 20,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###",
      dataPoints: [
        { name: "Confirmed", y: status.confirmed },
        { name: "Recovered", y: status.recovered },
        { name: "Deaths", y: status.deceased }
      ]
    }]
  }

  useEffect(() => {
    const filteredList = props.dataset.filter(element => element.dateymd === props.dateValue)
      .map(task => task);

    setStatus(status => ({
      ...status,
      state: stateName(props.stateValue),
      confirmed: finalData(filteredList, "Confirmed", props.stateValue),
      recovered: finalData(filteredList, "Recovered", props.stateValue),
      deceased: finalData(filteredList, "Deceased", props.stateValue)
    }));

  }, [props])

  const finalData = (list, status, state) => {
    return list.filter(element => element.status === status).map(element => element[state])
  }

  return <CanvasJSChart options={options}
  />
}
export default ChartElement;