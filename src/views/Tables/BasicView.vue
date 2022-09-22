<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";

interface TableCell {
  id: number;
  checked: boolean;
  name: string;
  title: string;
  email: string;
  role: string;
  status: number;
}

const tableData = ref<TableCell[]>([]);
watchEffect(async () => {
  tableData.value = [
    {
      id: 1,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 1,
    },
    {
      id: 2,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 0,
    },
    {
      id: 3,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 1,
    },
    {
      id: 4,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 0,
    },
    {
      id: 5,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 1,
    },
    {
      id: 6,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 1,
    },
    {
      id: 7,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 1,
    },
    {
      id: 8,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 0,
    },
    {
      id: 9,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 0,
    },
    {
      id: 10,
      checked: false,
      name: "Leon",
      title: "Full Stack",
      email: "leon@example.com",
      role: "member",
      status: 0,
    },
  ];
});

const toggleAllSelect = (e: MouseEvent) => {
  console.log((e.target as HTMLInputElement).checked);
  tableData.value = tableData.value.map((v, i) => {
    return { ...v, checked: (e.target as HTMLInputElement).checked };
  });
};
</script>

<template>
  <main class="bg-gray-100 p-4 min-h-screen">
    <div class="bg-white rounded shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Users</h1>
        <button class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Add User
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Name</th>
              <th class="px-4 py-3 font-medium">Title</th>
              <th class="px-4 py-3 font-medium">Email</th>
              <th class="px-4 py-3 font-medium">Status</th>
              <th class="px-4 py-3 font-medium">Role</th>
              <th class="px-4 py-3 font-medium rounded-tr-md"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="(v, i) in tableData"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ v.name }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ v.title }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ v.email }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <span
                  class="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
                  v-if="v.status === 1"
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
              <td class="px-4 py-3 whitespace-nowrap">{{ v.role }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <PencilIcon class="w-4 h-4 cursor-pointer" />
                <TrashIcon class="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white rounded mt-4 shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Users</h1>
        <button class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Add User
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th
                class="px-4 py-3 text-left text-sm font-medium text-slate-900 rounded-tl-md"
              >
                <input
                  type="checkbox"
                  class="rounded border-gray-400"
                  @click="toggleAllSelect"
                />
              </th>
              <th class="px-4 py-3 font-medium rounded-tl-md">Name</th>
              <th class="px-4 py-3 font-medium">Title</th>
              <th class="px-4 py-3 font-medium">Email</th>
              <th class="px-4 py-3 font-medium">Status</th>
              <th class="px-4 py-3 font-medium">Role</th>
              <th class="px-4 py-3 font-medium rounded-tr-md"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="(v, i) in tableData"
            >
              <td class="px-4 py-3 whitespace-nowrap">
                <input
                  type="checkbox"
                  class="rounded border-gray-400"
                  data-id="v.id"
                  :checked="v.checked"
                />
              </td>
              <td class="px-4 py-3 whitespace-nowrap">{{ v.name }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ v.title }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ v.email }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <span
                  class="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
                  v-if="v.status === 1"
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
              <td class="px-4 py-3 whitespace-nowrap">{{ v.role }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <PencilIcon class="w-4 h-4 cursor-pointer" />
                <TrashIcon class="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
