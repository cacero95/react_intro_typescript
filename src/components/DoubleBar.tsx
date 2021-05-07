import Chart from "react-apexcharts";
import data from './JSON/Smdata.json';
import { Props } from './JSON/ChartInterfaces';
import ReactApexChart from 'react-apexcharts';

export const DoubleBar = () => {

    const state: Props  = {
        series: data.sm.map((element) => {
            return {
                name: element.stationCode,
                data: [
                    {
                        x: element.distanceEpicentral,
                        y: element.pgaZ
                    }
                ]
            }
        }),
            options: {
              legend: {
                show: false
              },
              chart: {
                height: 350,
                type: 'treemap'
              },
              title: {
                text: 'Multi-dimensional Treemap',
                align: 'center'
              }
            },
    };


  return (
    <div id = "chart">
      <ReactApexChart
        options = { state.options }
        series = { state.series }
        type = "treemap"
        height = { 350 }
      />
    </div>
  )

}
