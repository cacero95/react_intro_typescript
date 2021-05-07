// Generated by https://quicktype.io
import { ApexOptions } from 'apexcharts';

export interface ChartInterface {
    series:  Series[];
    options: Options;
}

export interface Options {
    chart:      Chart;
    stroke:     Stroke;
    title:      Title;
    dataLabels: DataLabels;
    labels:     string[];
    xaxis:      Xaxis;
    yaxis:      Yaxi[];
}

export interface Chart {
    height: number;
    type:   string;
}

export interface DataLabels {
    enabled:         boolean;
    enabledOnSeries: number[];
}

export interface Stroke {
    width: number[];
}

export interface Title {
    text: string;
}

export interface Xaxis {
    type: string;
}

export interface Yaxi {
    title:     Title;
    opposite?: boolean;
}

export interface Series {
    name: string;
    type: string;
    data: number[];
}

export interface Props {
    type?: "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar",
    series?: Array<any>,
    width?: string | number,
    height?: string | number,
    options?: ApexOptions,
    [key: string]: any
}