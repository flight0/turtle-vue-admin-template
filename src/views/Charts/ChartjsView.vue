<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
  BarElement,
  LineController,
  BarController,
} from "chart.js";
import { Line, PolarArea, Bar, Pie, Radar, Bubble } from "vue-chartjs";
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
  BarController
);

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        color: "#e7eaf3",
        drawBorder: false,
        zeroLineColor: "#e7eaf3",
      },
      ticks: {
        beginAtZero: true,
        stepSize: 100,
        fontSize: 12,
        fontColor: "#97a4af",
        fontFamily: "Open Sans, sans-serif",
        padding: 10,
        postfix: "$",
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        fontSize: 12,
        fontColor: "#97a4af",
        fontFamily: "Open Sans, sans-serif",
        padding: 5,
      },
      categoryPercentage: 0.5,
      maxBarThickness: 10,
    },
  },
  cornerRadius: 2,
};
const barData = {
  labels: [
    "May 1",
    "May 2",
    "May 3",
    "May 4",
    "May 5",
    "May 6",
    "May 7",
    "May 8",
    "May 9",
    "May 10",
  ],
  datasets: [
    {
      data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
      backgroundColor: "#377dff",
      hoverBackgroundColor: "#377dff",
      borderColor: "#377dff",
      maxBarThickness: 10,
    },
    {
      data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
      backgroundColor: "#e7eaf3",
      borderColor: "#e7eaf3",
      maxBarThickness: 10,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: Array(7)
        .fill(0)
        .map(() => Math.floor(Math.random() * 1000)),
      borderColor: "rgb(73, 131, 218)",
      backgroundColor: "rgba(73, 131, 218, 0.5)",
    },
    {
      label: "Dataset 2",
      data: Array(7)
        .fill(0)
        .map(() => Math.floor(Math.random() * 1000)),
      borderColor: "rgb(159, 159, 159)",
      backgroundColor: "rgba(159, 159, 159, 0.5)",
      borderDash: [10, 10],
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const radarData = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "# of Votes",
      data: [10, 28, 4, 12, 32, 12],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
    },
  ],
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const bubbleOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const bubbleData = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomInt(-100, 100),
        y: getRandomInt(-100, 100),
        r: getRandomInt(5, 20),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomInt(-100, 100),
        y: getRandomInt(-100, 100),
        r: getRandomInt(5, 20),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const polarData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const polarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};
</script>

<template>
  <main class="bg-gray-100 p-4">
    <main
      class="bg-gray-100 p-4 min-h-screen grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      <div class="bg-white p-4 rounded shadow">
        <p>Bar Chart</p>
        <div class="mt-2">
          <Bar :chart-options="barOptions" :chart-data="barData" class="h-80" />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>Line Chart</p>
        <div class="mt-2">
          <Line :chart-options="lineOptions" :chart-data="lineData" class="h-80" />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>Pie Chart</p>
        <div class="mt-2">
          <Pie :chart-data="pieData" :chart-options="pieOptions" class="h-80" />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>Radar Chart</p>
        <div class="mt-2">
          <Radar :chart-data="radarData" :chart-options="radarOptions" class="h-80" />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>Bubble Chart</p>
        <div class="mt-2">
          <Bubble :chart-options="bubbleOptions" :chart-data="bubbleData" class="h-80" />
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <p>Polar Chart</p>
        <div class="mt-2">
          <PolarArea :chart-data="polarData" :chart-options="polarOptions" class="h-80" />
        </div>
      </div>
    </main>
  </main>
</template>
