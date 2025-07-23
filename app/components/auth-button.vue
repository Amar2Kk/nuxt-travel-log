<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <button class="btn btn-primary" :disabled="authStore.loading" @click="authStore.signIn">
    Sign in with Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="22" />
  </button>
</template>
