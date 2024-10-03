<script setup>
import {useRoute} from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>
<template>
  <div class="flex space-x-2">
    <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"> Home </RouterLink>
    <RouterLink to="/jobs" :class="[isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"> Jobs </RouterLink>
    <RouterLink to="/add-jobs" :class="[isActiveLink('/add-jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
      Add Job
    </RouterLink>
  </div>
</template>
