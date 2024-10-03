<script setup>
import axios from "axios";
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";

const jobId = useRoute().params.jobId;
const state = reactive({
  job: {},
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/data/${jobId}`, {
      headers: JSON.parse(import.meta.env.VITE_HEADERS),
    });

    state.job = response.data;
  } catch (error) {
    console.error("Error fetching jobs: ", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink to="/jobs" class="text-green-500 hover:text-green-600 flex items-center"> <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings </RouterLink>
    </div>
  </section>

  <section v-show="state.isLoading" class="text-left ms-10">
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
  </section>

  <section v-show="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job?.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job?.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.job?.location }}</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ state.job?.description }}</p>
            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.job?.salary }} / Year</p>
          </div>
        </main>
        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ state.job?.company?.name }}</h2>
            <p class="my-2">{{ state.job?.company?.description }}</p>
            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job?.company?.contactEmail }}</p>
            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job?.company?.contactPhone }}</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/update-job/${state.job?._id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Edit Job
            </RouterLink>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Delete Job</button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
