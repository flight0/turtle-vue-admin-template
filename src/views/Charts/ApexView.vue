<script setup lang="ts">
const areaOptions = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth" as const,
  },
  xaxis: {
    type: "datetime" as const,
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  legend: {
    show: false,
  },
};

const areaSeries = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const lineSeries = [
  {
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
  },
  {
    name: "Total Visits",
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
  },
];

const lineOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [5, 7, 5],
    curve: "straight" as const,
    dashArray: [0, 8, 5],
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan",
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: (val: string) => {
            return val + " (mins)";
          },
        },
      },
      {
        title: {
          formatter: (val: string) => {
            return val + " per session";
          },
        },
      },
      {
        title: {
          formatter: (val: string) => {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  legend: {
    show: false,
  },
};

const barSeries = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];
const barOptions = {
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
};

const columnSeries = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];
const columnOptions = {
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  // yaxis: {
  //   title: {
  //     text: '$ (thousands)'
  //   }
  // },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val: number) => {
        return "$ " + val + " thousands";
      },
    },
  },
  legend: {
    show: false,
  },
};

const candlestickSeries = [
  {
    data: [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24],
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47],
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02],
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02],
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97],
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602],
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95],
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02],
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591],
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592],
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34],
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86],
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01],
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25],
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99],
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81],
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96],
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39],
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27],
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55],
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02],
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01],
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06],
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89],
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5],
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86],
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07],
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606],
      },
    ],
  },
];
const candlestickOptions = {
  xaxis: {
    type: "datetime" as const,
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const pieSeries = [25, 15, 44, 55, 41, 17];
const pieOptions = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  legend: {
    show: false,
  },
};

const radarSeries = [
  {
    name: "Series 1",
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: "Series 2",
    data: [20, 30, 40, 80, 20, 80],
  },
  {
    name: "Series 3",
    data: [44, 76, 78, 13, 43, 10],
  },
];
const radarOptions = {
  chart: {
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
  legend: {
    show: false,
  },
};

const generateHeatmapData = (
  count: number,
  yrange: { min: number; max: number }
) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
};

const heatmapOptions = {
  dataLabels: {
    enabled: false,
  },
  colors: ["#008FFB"],
};
const heatmapSeries = [
  {
    name: "Metric1",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric2",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric3",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric4",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric5",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric6",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric7",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric8",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric9",
    data: generateHeatmapData(18, {
      min: 0,
      max: 90,
    }),
  },
];
</script>

<template>
  <main class="bg-gray-100 p-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <p>SparkLine Line Chart</p>
        <div class="mt-2">
          <apexchart
            :options="{
              ...lineOptions,
              chart: { sparkline: { enabled: true } },
            }"
            :series="lineSeries"
            type="line"
            height="120"
          />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>SparkLine Bar Chart</p>
        <div class="mt-2">
          <apexchart
            :options="{
              ...barOptions,
              chart: { sparkline: { enabled: true } },
            }"
            :series="barSeries"
            type="bar"
            height="120"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <p>SparkLine Area Chart</p>
        <div class="mt-2">
          <apexchart
            :options="{
              ...areaOptions,
              chart: { sparkline: { enabled: true } },
            }"
            :series="areaSeries"
            type="area"
            height="120"
          />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>SparkLine Pie Chart</p>
        <div class="mt-2">
          <apexchart
            :options="{
              ...pieOptions,
              chart: { sparkline: { enabled: true } },
            }"
            :series="pieSeries"
            type="pie"
            height="120"
          />
        </div>
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <p>Column Chart</p>
      <div class="mt-2">
        <apexchart
          :options="columnOptions"
          :series="columnSeries"
          type="bar"
          height="320"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <p>Candlestick Chart</p>
      <div class="mt-2">
        <apexchart
          :options="candlestickOptions"
          :series="candlestickSeries"
          type="candlestick"
          height="320"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <p>Radar Chart</p>
      <div class="mt-2">
        <apexchart
          :options="radarOptions"
          :series="radarSeries"
          type="radar"
          height="320"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <p>Heatmap Chart</p>
      <div class="mt-2">
        <apexchart
          :options="heatmapOptions"
          :series="heatmapSeries"
          type="heatmap"
          height="320"
        />
      </div>
    </div>
  </main>
</template>
