<script setup lang="ts">
import { Line, Doughnut, Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  hover: {
    intersect: false,
  },
};

const labels = [
  "1 May",
  "2 May",
  "3 May",
  "4 May",
  "5 May",
  "6 May",
  "7 May",
  "8 May",
  "9 May",
  "10 May",
  "11 May",
  "12 May",
  "13 May",
  "14 May",
  "15 May",
  "16 May",
  "17 May",
  "18 May",
  "19 May",
  "20 May",
  "21 May",
  "22 May",
  "23 May",
  "24 May",
  "25 May",
  "26 May",
  "27 May",
  "28 May",
  "29 May",
  "30 May",
  "31 May",
];

const chartData = {
  labels,
  datasets: [
    {
      data: Array(31)
        .fill(0)
        .map((i) => Math.floor(Math.random() * 100)),
      backgroundColor: ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
      borderColor: "#377dff",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const lineChartOptions = {
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
  scales: {
    x: {
      grid: {
        // drawBorder: false,
        // display: false,
        drawOnChartArea: false,
        // drawTicks: false,
      },
    },
  },
};

const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.4,
      fill: { value: 25 },
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.4,
      borderDash: [5, 5],
    },
  ],
};

const doughnutData = {
  labels: ["Living Room", "Kitchen", "Attic", "Garage", "Basement"],
  datasets: [
    {
      // weight: 30,
      cutout: 50,
      // tension: 0.9,
      pointRadius: 2,
      // borderWidth: 2,
      backgroundColor: ["#FF0080", "#A8B8D8", "#21d4fd", "#98ec2d", "#ff667c"],
      data: [15, 20, 13, 32, 20],
      fill: false,
      hoverOffset: 4,
    },
  ],
};
const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
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
      stacked: true,
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
      stacked: true,
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
</script>

<template>
  <main class="p-4 bg-gray-50">
    <ul
      class="flex gap-4 flex-wrap lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4"
    >
      <li class="w-full rounded shadow p-4 bg-white">
        <p class="text-gray-600 text-sm font-medium">Users</p>
        <div class="mt-2 flex justify-between items-center">
          <span class="text-2xl font-medium">74,123</span>
          <div class="w-32 h-12">
            <Line
              :chart-data="chartData"
              :chart-options="chartOptions"
              style="height: 48px"
            />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded">
            +1,234
          </span>
          <span class="text-gray-400 ml-2 text-sm">Since yesterday</span>
        </div>
      </li>
      <li class="w-full rounded shadow p-4 bg-white">
        <p class="text-gray-600 text-sm font-medium">Income</p>
        <div class="mt-2 flex justify-between items-center">
          <span class="text-2xl font-medium">$24,234</span>
          <div class="w-32 h-12">
            <Line
              :chart-data="chartData"
              :chart-options="chartOptions"
              style="height: 48px"
            />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded">
            -$2,234
          </span>
          <span class="text-gray-400 ml-2 text-sm">Since last week</span>
        </div>
      </li>
      <li class="w-full rounded shadow p-4 bg-white">
        <p class="text-gray-600 text-sm font-medium">Recharge Users</p>
        <div class="mt-2 flex justify-between items-center">
          <span class="text-2xl font-medium">3,234</span>
          <div class="w-32 h-12">
            <Line
              :chart-data="chartData"
              :chart-options="chartOptions"
              style="height: 48px"
            />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded">
            +%12
          </span>
          <span class="text-gray-400 ml-2 text-sm">Since yesterday</span>
        </div>
      </li>
      <li class="w-full rounded shadow p-4 bg-white">
        <p class="text-gray-600 text-sm font-medium">Orders</p>
        <div class="mt-2 flex justify-between items-center">
          <span class="text-2xl font-medium">423</span>
          <div class="w-32 h-12">
            <Line
              :chart-data="chartData"
              :chart-options="chartOptions"
              style="height: 48px"
            />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded">
            -%13
          </span>
          <span class="text-gray-400 ml-2 text-sm">Since last month</span>
        </div>
      </li>
    </ul>
    <div class="xl:grid xl:grid-cols-6 xl:gap-4">
      <div class="mt-4 bg-white p-4 rounded shadow xl:col-span-4">
        <p>Total Income</p>
        <div class="mt-2">
          <Line
            :chart-data="lineChartData"
            :chart-options="lineChartOptions"
            class="h-80 xl:h-[375px]"
          />
        </div>
      </div>
      <div class="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
        <p>Weekly sales</p>
        <div class="mt-2">
          <Doughnut
            :chart-data="doughnutData"
            :chart-options="doughnutOptions"
            class="h-40"
          />
        </div>
        <table class="w-full mt-2 h-16 text-sm text-gray-800">
          <thead>
            <tr>
              <th class="pl-4 text-left font-medium py-2">Type</th>
              <th class="text-right font-medium">Revenue</th>
              <th class="pr-4 text-right font-medium">Value</th>
            </tr>
          </thead>
          <tbody class="divide-y border-t">
            <tr>
              <th class="pl-4 text-left font-normal py-2">Living Room</th>
              <td class="text-right">15</td>
              <td class="pr-4 text-right">
                <span class="text-green-600">+70%</span>
              </td>
            </tr>
            <tr>
              <th class="pl-4 text-left font-normal py-2">Kitchen</th>
              <td class="text-right">20</td>
              <td class="pr-4 text-right">
                <span class="text-red-600">-2%</span>
              </td>
            </tr>
            <tr>
              <th class="pl-4 text-left font-normal py-2">Attic</th>
              <td class="text-right">13</td>
              <td class="pr-4 text-right">
                <span class="text-green-600">+30%</span>
              </td>
            </tr>
            <tr>
              <th class="pl-4 text-left font-normal py-2">Garage</th>
              <td class="text-right">32</td>
              <td class="pr-4 text-right">
                <span class="text-red-600">-13%</span>
              </td>
            </tr>
            <tr>
              <th class="pl-4 text-left font-normal py-2">Basement</th>
              <td class="text-right">20</td>
              <td class="pr-4 text-right">
                <span class="text-green-600">+12%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="xl:grid xl:grid-cols-6 xl:gap-4">
      <div class="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
        <p>Money Expenses</p>
        <div class="mt-2">
          <Bar :chart-data="barData" :chart-options="barOptions" class="h-80" />
        </div>
      </div>

      <div
        class="mt-4 bg-white p-4 rounded shadow overflow-x-auto xl:col-span-4"
      >
        <table class="w-full">
          <thead>
            <tr class="text-sm">
              <th class="text-left p-4 font-medium">Name</th>
              <th class="text-left p-4 font-medium">Title</th>
              <th class="text-left p-4 font-medium">Status</th>
              <th class="text-left p-4 font-medium">Email</th>
              <th class="text-left p-4 font-medium">Role</th>
            </tr>
          </thead>
          <tbody class="divide-y border-t">
            <tr v-for="(item, index) in Array(6).fill(1)">
              <td class="text-left whitespace-nowrap text-sm p-4">Leon</td>
              <td class="text-left whitespace-nowrap text-sm p-4">
                Front-end Developer
              </td>
              <td class="text-left whitespace-nowrap text-sm p-4">
                <span
                  class="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
                  v-if="index % 2 === 0"
                >
                  Active
                </span>
                <span
                  class="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full"
                  v-else
                >
                  InActive
                </span>
              </td>
              <td class="text-left whitespace-nowrap text-sm p-4">
                leon.fu@example.com
              </td>
              <td class="text-left whitespace-nowrap text-sm p-4">Owner</td>
              <td class="text-left whitespace-nowrap text-sm p-4">
                <span class="text-indigo-600">Edit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
