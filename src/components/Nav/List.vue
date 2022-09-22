<script setup lang="ts">
import {
  ArrowRightOnRectangleIcon,
  ChartPieIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  PencilSquareIcon,
  TableCellsIcon,
  UserPlusIcon,
  ExclamationCircleIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline";
import NavItem from "@/components/Nav/Item.vue"


const navs = [
  {
    title: "DASHBOARDS",
    items: [
      {
        path: "/home",
        name: "Home",
        icon: HomeIcon,
      },
    ],
  },
  {
    title: "COMPONENTS",
    items: [
      {
        name: "Forms",
        icon: PencilSquareIcon,
        child: [
          {
            name: "General Form",
            path: "/forms/general",
          },
          // {
          //   name: "Advanced Form",
          //   path: "forms/advanced",
          // },
        ],
      },
      {
        name: "Tables",
        icon: TableCellsIcon,
        child: [
          {
            name: "Basic Table",
            path: "/tables/basic",
          },
        ],
      },
      {
        name: "Charts",
        icon: ChartPieIcon,
        child: [
          {
            name: "ApexCharts",
            path: "/charts/apex",
          },
          {
            name: "Chart.js",
            path: "/charts/chartjs",
          },
        ],
      },
      {
        name: "Icons",
        icon: HeartIcon,
        child: [
          {
            name: "heroicons",
            path: "/icons/heroicons",
          },
          // {
          //   name: "Bootstrap",
          //   path: "icons/bootstrap",
          // },
        ],
      },
    ],
  },
  {
    title: "PAGES",
    items: [
      {
        name: "Sign In",
        path: "/sign-in",
        icon: ArrowRightOnRectangleIcon,
      },
      {
        name: "Sing Up",
        path: "/sign-up",
        icon: UserPlusIcon,
      },
      {
        name: "404 Error",
        path: "/404",
        icon: ExclamationCircleIcon,
      },
      {
        name: "500 Error",
        path: "/500",
        icon: ExclamationTriangleIcon,
      },
    ],
  },
];
</script>

<template>
  <nav class="mt-4">
    <ul class="flex flex-col gap-2 text-white">
      <li v-for="item in navs">
        <div class="text-sm text-gray-400 my-2 ml-2">{{ item.title }}</div>
        <ul>
          <li v-for="nav in item.items">
           <NavItem :navItem="nav" />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
