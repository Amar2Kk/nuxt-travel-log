<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>

<template>
  <div class="card bg-base-300 container mt-8 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-6 p-8 shadow-lg">
    <div class="flex flex-col items-center gap-2">
      <Icon name="tabler:alert-triangle" size="64" class="text-error mb-2" />
      <h1 class="text-3xl font-bold text-error">
        Oops! Something went wrong
      </h1>
      <p class="text-lg text-base-content">
        {{ error }}
      </p>
    </div>
    <NuxtLink to="/" class="btn btn-primary mt-6 flex items-center gap-2">
      <Icon name="tabler:arrow-left" size="22" />
      Back to Home
    </NuxtLink>
  </div>
</template>
