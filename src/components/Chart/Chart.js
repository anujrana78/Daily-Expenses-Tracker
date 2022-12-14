import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map( (datapoint) => {    
        return <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      }
      )
    }
    </div>
  );
};

export default Chart;
