<script setup lang="ts">
defineProps({
  data: Object
})
</script>

<template>
  <transition
    leave-active-class="transition ease-out duration-700"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${data?.imageUrl})` }"
    />
  </transition>
</template>
