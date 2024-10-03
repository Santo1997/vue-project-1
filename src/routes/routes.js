import {createWebHistory, createRouter} from "vue-router";

import Home from "../components/pages/Home.vue";
import Jobs from "../components/pages/Jobs.vue";
import JobDetails from "../components/pages/JobDetails.vue";
import AddJobs from "../components/pages/AddJobs.vue";
import EditJobs from "../components/pages/EditJobs.vue";
import ErrorPage from "../components/pages/ErrorPage.vue";

const routes = [
  {path: "/", component: Home, meta: {title: "Home"}},
  {path: "/jobs", component: Jobs, meta: {title: "Jobs"}},
  {path: "/job-details/:jobId", component: JobDetails, meta: {title: "Job Details"}},
  {path: "/add-jobs", component: AddJobs, meta: {title: "Add Jobs"}},
  {path: "/update-job/:jobId", component: EditJobs, meta: {title: "Edit Jobs"}},
  {path: "/:catchAll(.*)", component: ErrorPage, meta: {title: "404 Error"}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Vue Jobs || ${to.meta.title}` || "Vue Jobs";
  next();
});

export default router;
