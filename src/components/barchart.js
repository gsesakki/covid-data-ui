import { useEffect } from "react";

const BarChartElement = (props) => {

    function getDate(string) {
        var parts = string.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
        // console.log(mydate);
    }

    useEffect(() => {
        var dateFrom = new Date();
        dateFrom.setDate(dateFrom.getDate() - props.trendDays);
        // console.log(dateFrom);

        const confirmedList = (props.dataset)
            .filter(element => getDate(element.dateymd) > dateFrom && element.status === "Confirmed")
            .map(element => element["tn"])

        const recoveredList = (props.dataset).filter(element => getDate(element.dateymd) > dateFrom && element.status === "Recovered")
        const deceasedList = (props.dataset).filter(element => getDate(element.dateymd) > dateFrom && element.status === "Deceased")

        console.log(confirmedList)
    }, [props])
    return <h1>BarChart</h1>
}

export default BarChartElement;