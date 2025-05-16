<script setup lang="ts">
defineProps({
  data: Object,
})
</script>

<template>
  <transition
    leave-active-class="transition ease-out duration-700"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <iframe
      class="h-screen w-screen"
      :src="`${data?.iframeUrl}`"
      allowfullscreen
    />
  </transition>
</template>
