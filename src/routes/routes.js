import {createWebHistory, createRouter} from "vue-router";

import Home from "../components/pages/Home.vue";
import Jobs from "../components/pages/Jobs.vue";
import JobDetails from "../components/pages/JobDetails.vue";
import AddJobs from "../components/pages/AddJobs.vue";
import EditJobs from "../components/pages/EditJobs.vue";

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/jobs", name: "Jobs", component: Jobs},
  {path: "/job-details/:jobId", name: "JobDetails", component: JobDetails},
  {path: "/add-jobs", name: "AddJobs", component: AddJobs},
  {path: "/update-job/:jobId", name: "AddJobs", component: EditJobs},
  {path: "/:pathMatch(.*)*", redirect: "/"},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
