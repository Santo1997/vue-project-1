<script setup>
import axios from "axios";
import {onMounted, reactive, computed} from "vue";

const state = reactive({
  jobs: [],
  isLoading: true,
  searchQuery: "",
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/getData", {
      headers: JSON.parse(import.meta.env.VITE_HEADERS),
    });

    state.jobs = response.data;
  } catch (error) {
    console.error("Error fetching jobs: ", error);
  } finally {
    state.isLoading = false;
  }
});

const filteredJobs = computed(() => {
  return state.jobs.filter((job) => job.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
});
</script>

<template>
  <section class="bg-green-50 py-4">
    <div class="container mx-auto px-4">
      <div class="relative">
        <input
          v-model="state.searchQuery"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Filter jobs..." />
      </div>
    </div>
  </section>

  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-show="state.isLoading" class="text-center col-span-3">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div v-show="!state.isLoading" v-for="job in filteredJobs" :key="job._id" class="bg-white rounded-xl shadow-md relative">
          <div class="p-4">
            <div class="mb-6">
              <div class="text-gray-600 my-2">{{ job.type }}</div>
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>
            <div class="mb-5">{{ job.description.slice(0, 95) + "..." }}</div>
            <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>
            <div class="border border-gray-100 mb-5"></div>
            <div class="flex flex-col lg:flex-row justify-between mb-4">
              <div class="text-orange-700 mb-3">
                <i class="fa-solid fa-location-dot text-lg"></i>
                {{ job.location }}
              </div>
              <RouterLink :to="`/job-details/${job._id}`" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                Read More
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
