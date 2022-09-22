<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownOnSquareIcon,
  ArrowDownOnSquareStackIcon,
  ArrowDownRightIcon,
  ArrowDownTrayIcon,
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";

const icons = [
    AcademicCapIcon,
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    ArchiveBoxArrowDownIcon,
    ArchiveBoxXMarkIcon,
    ArchiveBoxIcon,
    ArrowDownCircleIcon,
    ArrowDownLeftIcon,
    ArrowDownOnSquareIcon,
    ArrowDownOnSquareStackIcon,
    ArrowDownRightIcon,
    ArrowDownTrayIcon,
    ArrowDownIcon,
    ArrowLeftCircleIcon,
    ArrowLeftOnRectangleIcon,
    ArrowLeftIcon,
  ];
</script>

<template>
  <main class="bg-gray-100 p-4 min-h-screen">
    <div class="text-sm">
      <p>Heroicons</p>
      <p>By the makers of tailwindcss</p>
    </div>
    <div
      class="grid grid-cols-2 mt-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
    >
      <div
        class="bg-white flex items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08] aspect-square"
        v-for="(v,i) in icons"
      >
        <component
          :is="v"
          class="w-6 h-6"
        ></component>
      </div>
    </div>
    <div class="mt-8">
      <a
        href="https://heroicons.com/"
        target="_blank"
        rel="noreferrer"
        class="text-sm text-white bg-indigo-600 px-4 py-2 rounded inline-flex justify-center items-center"
      >
        <span>Browse all available icons</span>
        <ArrowRightIcon class="w-5 h-5 ml-2" />
      </a>
    </div>
  </main>
</template>
