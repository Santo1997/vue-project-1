<script setup>
import Hero from "../layouts/home/Hero.vue";
import Category from "../layouts/home/Category.vue";
import JobsCard from "../layouts/home/JobsCard.vue";
</script>

<template>
  <Hero :title="'Become a Vue Developer'" />
  <Category />
  <JobsCard />
</template>
