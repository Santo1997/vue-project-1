<script setup>
import {RouterLink} from "vue-router";
import logo from "../../assets/logo.png";
import Links from "./Links.vue";
</script>

<template>
  <header>
    <nav class="bg-green-700 border-b border-green-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Intern Jobs</span>
            </RouterLink>
            <div class="md:ml-auto">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
