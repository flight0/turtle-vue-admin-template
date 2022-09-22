import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "@/views/LayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import FormGeneralView from "@/views/Forms/GeneralView.vue";
import TableBasicView from "@/views/Tables/BasicView.vue";
import ChartApexView from "@/views/Charts/ApexView.vue";
import ChartChartjsView from "@/views/Charts/ChartjsView.vue";
import HeroiconViewVue from "@/views/Icons/HeroiconView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpVIew from "@/views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutView,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "home",
          component: HomeView,
        },
        {
          path: "forms/general",
          component: FormGeneralView,
        },
        {
          path: "tables/basic",
          component: TableBasicView,
        },
        {
          path: "charts/apex",
          component: ChartApexView,
        },
        {
          path: "charts/chartjs",
          component: ChartChartjsView,
        },
        {
          path: "icons/heroicons",
          component: HeroiconViewVue,
        },
      ],
    },
    {
      path: "/sign-in",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SignInView.vue"),
    },
    {
      path: "/sign-up",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SignUpView.vue"),
    },
    {
      path: "/404",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/NotFountView.vue"),
    },
    {
      path: "/500",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ServerErrorView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFountView.vue"),
    },
  ],
});

export default router;
