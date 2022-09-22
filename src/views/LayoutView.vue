<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  BellIcon,
  DocumentDuplicateIcon,
  ArchiveBoxIcon,
  ArrowTopRightOnSquareIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import NavList from "@/components/Nav/List.vue";

const route = useRoute();
const asideRef = ref<HTMLElement | null>(null);
const asideMaskRef = ref<HTMLDivElement | null>(null);

const toggleAside = () => {
  const asideClassList = asideRef.value?.classList;
  const asideMaskClassList = asideMaskRef.value?.classList;

  asideClassList?.toggle("-translate-x-full");
  asideClassList?.toggle("lg:-ml-[250px]");

  if (asideMaskClassList?.contains("invisible")) {
    asideMaskClassList?.remove("invisible", "opacity-0");
    asideMaskClassList?.add("visible", "opacity-50");
  } else {
    asideMaskClassList?.add("invisible", "opacity-0");
    asideMaskClassList?.remove("visible", "opacity-50");
  }
};

watch(route, () => {
  const asideClassList = asideRef.value?.classList;
  const asideMaskClassList = asideMaskRef.value?.classList;
  if (asideMaskClassList?.contains("visible")) {
    asideMaskClassList?.add("invisible", "opacity-0");
    asideMaskClassList?.remove("visible", "opacity-50");
    asideClassList?.toggle("-translate-x-full");
  }
});
</script>

<template>
  <div class="flex">
    <aside
      class="z-20 fixed top-0 left-0 bg-indigo-600 w-[250px] min-h-screen -translate-x-full transition-all duration-500 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 lg:shadow-2xl lg:shadow-indigo6-600"
      ref="asideRef"
    >
      <div class="h-16 flex justify-center items-center shadow-md">
        <RouterLink to="/" class="text-white text-2xl font-medium">
          TURTLE
        </RouterLink>
      </div>
      <NavList />
    </aside>
    <div class="w-full">
      <header class="h-16 flex justify-between items-center p-4 shadow">
        <Bars3Icon
          class="h-6 w-6 stroke-indigo-600 lg:cursor-pointer"
          @click="toggleAside"
        />
        <form class="group relative ml-2 mr-auto">
          <MagnifyingGlassIcon
            class="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-indigo-500"
          />
          <input
            class="focus:ring-2 focus:ring-indigo-600 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 border-none w-36 md:w-96"
            type="text"
            aria-label="Search"
            placeholder="Search"
          />
        </form>
        <Menu as="div" class="relative mr-3">
          <div class="flex items-center">
            <MenuButton>
              <BellIcon class="w-6 h-6 stroke-slate-400 cursor-pointer" />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <PencilSquareIcon
                      :class="['mr-2 h-5 w-5', !active && 'stroke-indigo-600']"
                      aria-hidden="true"
                    />
                    Edit
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <DocumentDuplicateIcon
                      :class="['mr-2 h-5 w-5', !active && 'stroke-indigo-600']"
                      aria-hidden="true"
                    />
                    Duplicate
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <ArchiveBoxIcon
                      :class="['mr-2 h-5 w-5', !active && 'stroke-indigo-600']"
                      aria-hidden="true"
                    />
                    Archive
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <ArrowTopRightOnSquareIcon
                      :class="['mr-2 h-5 w-5', !active && 'stroke-indigo-600']"
                      aria-hidden="true"
                    />
                    Move
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <TrashIcon
                      :class="['mr-2 h-5 w-5', !active && 'stroke-indigo-600']"
                      aria-hidden="true"
                    />
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <div>
          <img
            class="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt="avatar"
          />
        </div>
      </header>
      <RouterView />
    </div>
    <div
      class="bg-black h-screen w-screen fixed top-0 left-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden"
      ref="asideMaskRef"
      @click="toggleAside"
    ></div>
  </div>
</template>
