<template>
  <div v-if="props.loading" class="loader"></div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  loading: Boolean,
});
</script>

<style>
.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  animation: l15-1 1s infinite, l15-2 1s infinite;
}
@keyframes l15-1 {
  0%,
  100% {
    background-size: 20% 100%;
  }
  33%,
  66% {
    background-size: 20% 40%;
  }
}
@keyframes l15-2 {
  0%,
  33% {
    background-position: 0 0, 50% 100%, 100% 100%;
  }
  66%,
  100% {
    background-position: 100% 0, 0 100%, 50% 100%;
  }
}
</style>
