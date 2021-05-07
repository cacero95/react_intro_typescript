// import Chart from "react-apexcharts";
import data from './JSON/Smdata.json';
import { Props } from './JSON/ChartInterfaces';
import ReactApexChart from 'react-apexcharts';

export const TripleBars = () => {
    const state: Props  = {
        series: [{
              name: 'Aceleraciones',
              data: data.sm.map( element => {
                return element.distanceEpicentral
              })
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                categories: data.sm.map( element => {
                    return `${ element.stationCode }`
                }),
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false
                }
              
              },
              title: {
                text: 'Monthly Inflation in Argentina, 2002',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                  color: '#444'
                }
              }
            },
    };


  return (
    <div id = "chart">
      <ReactApexChart
        options = { state.options }
        series = { state.series }
        type = "bar"
        height = { 350 }
      />
    </div>
  )
}
