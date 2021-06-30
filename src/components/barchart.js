import { useEffect, useState } from "react";
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChartElement = (props) => {

    const [confirmed, setConfirmed] = useState()
    const [recovered, setRecovered] = useState()
    const [deceased, setDeceased] = useState()

    function getDate(string) {
        var parts = string.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    const options = {
        animationEnabled: true,
        title: {
            text: `Daily Trend for Last 10 days -(${(props.state).toUpperCase()})`,
            fontSize: 24,
        },
        axisX: {
            valueFormatString: "DD-MMM"
        },
        axisY: {
            title: "Case Count",
            // prefix: "$"
        },
        data: [{
            name: "Confirmed",
            yValueFormatString: "#,###",
            xValueFormatString: "Confirmed",
            type: "spline",
            dataPoints: confirmed
        },
        {
            name: "Recovered",
            yValueFormatString: "#,###",
            xValueFormatString: "Recovered",
            type: "spline",
            dataPoints: recovered
        },
        {
            name: "Deaths",
            yValueFormatString: "#,###",
            xValueFormatString: "Deaths",
            type: "spline",
            dataPoints: deceased
        }
        ]
    }

    useEffect(() => {
        var dateFrom = new Date();
        dateFrom.setDate(dateFrom.getDate() - props.trendDays);

        let confirmedCases = []
        let recoveredCases = []
        let deathCases = []

        const confirmedList = (props.dataset)
            .filter(element => getDate(element.dateymd) > dateFrom && element.status === "Confirmed")
            .map(element => confirmedCases.push({ "x": getDate(element.dateymd), "y": parseInt(element[props.state]) }));
        setConfirmed(confirmedCases)

        const recoveredList = (props.dataset)
            .filter(element => getDate(element.dateymd) > dateFrom && element.status === "Recovered")
            .map(element => recoveredCases.push({ "x": getDate(element.dateymd), "y": parseInt(element[props.state]) }))
        setRecovered(recoveredCases)
        const deceasedList = (props.dataset)
            .filter(element => getDate(element.dateymd) > dateFrom && element.status === "Deceased")
            .map(element => deathCases.push({ "x": getDate(element.dateymd), "y": parseInt(element[props.state]) }))
        setDeceased(deathCases)
    }, [props])

    return <CanvasJSChart options={options} />
}

export default BarChartElement;