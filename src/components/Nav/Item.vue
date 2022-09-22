<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { RouterLink, useRoute } from "vue-router";
import ItemChild from "./ItemChild.vue";

const props = defineProps(["navItem"]);

const match = ref<boolean>(false);
const childrenWrapperRef = ref<HTMLDivElement | null>(null);
const chevronRef = ref<SVGSVGElement | null>(null);
const childrenRef = ref<HTMLUListElement | null>(null);
const childrenWrapperHeight = ref(0);

const toggleNavItem = () => {
  if (childrenWrapperRef.value?.style.height === "0px") {
    (
      childrenWrapperRef.value as HTMLDivElement
    ).style.height = `${childrenRef.value?.clientHeight}px`;
    chevronRef.value?.classList.replace("rotate-0", "rotate-90");
  } else {
    (childrenWrapperRef.value as HTMLDivElement).style.height = "0px";
    chevronRef.value?.classList.replace("rotate-90", "rotate-0");
  }
};

onMounted(() => {
  if (match.value === true) {
    (childrenWrapperRef.value as HTMLDivElement).style.height = `${
      childrenRef.value?.clientHeight as number
    }px`;
    chevronRef.value?.classList.replace("rotate-0", "rotate-90");
  }
});
</script>

<template>
  <template v-if="props.navItem.path">
    <RouterLink
      class="px-4 flex items-center justify-between py-3 hover:bg-indigo-700"
      :to="props.navItem.path"
      :activeClass="'bg-indigo-700'"
      ><div class="flex items-center">
        <component
          :is="props.navItem.icon"
          class="h-5 w-5 stroke-white"
        ></component>
        <span class="ml-2 text-sm text-white">{{ props.navItem.name }}</span>
      </div></RouterLink
    >
  </template>
  <template v-else>
    <div
      class="px-4 flex items-center justify-between py-3 cursor-pointer hover:bg-indigo-700"
      @click="toggleNavItem"
    >
      <div class="flex items-center">
        <component
          :is="props.navItem.icon"
          class="h-5 w-5 stroke-white"
        ></component>
        <span class="ml-2 text-sm text-white">{{ props.navItem.name }}</span>
      </div>
      <ChevronRightIcon
        class="h-4 w-4 stroke-white rotate-0 transition-transform duration-500"
        ref="chevronRef"
      />
    </div>
    <div
      class="overflow-hidden transition-all duration-500"
      :style="{ height: `${childrenWrapperHeight}px` }"
      ref="childrenWrapperRef"
    >
      <ul class="text-sm" ref="childrenRef">
        <li v-for="itemChild in props.navItem.child">
          <ItemChild :itemChild="itemChild" @setMatch="(s) => (match = s)" />
        </li>
      </ul>
    </div>
  </template>
</template>
