// import Chart from "react-apexcharts";
import data from './JSON/Smdata.json';
import { Props } from './JSON/ChartInterfaces';
import ReactApexChart from 'react-apexcharts';

export const Charts = () => {

  const state: Props  = {
    series: data.sm.map((element) => {
      return {
        name: element.stationCode,
        type: 'column',
        data: [ [element.distanceEpicentral, element.pgaZ] ]
      }
    }),
    options: {
		chart: {
			height: 350,
			type: 'scatter',
			zoom: {
			enabled: true,
			type: 'xy'
			}
		}, 
		xaxis: {
			tickAmount: 10,
			labels: {
				formatter: function(val) {
				
					return parseFloat(val).toFixed(1)
				}
			},
			title: {
				text: 'XAxis'
			}

		},
		yaxis: {
			tickAmount: 7,
			title: {
				text: 'YAxis'
			}
		},
		title: {
			text: 'title',
			align: 'center'
		},
	},
  };


  return (
    <div id = "chart">
      <ReactApexChart
        options = { state.options }
        series = { state.series }
        type = "scatter"
        height = { 350 }
      />
    </div>
  )

}
