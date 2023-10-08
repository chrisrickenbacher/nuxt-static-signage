<script setup lang="ts">
import { type PropType } from 'vue'
import type { SceneDataParams } from './../types'
defineProps({
  data: {
    type: Object as PropType<SceneDataParams>,
    required: true,
    default: undefined
  }
})
</script>

<template>
  <transition
    leave-active-class="transition ease-out duration-700"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="flex h-screen w-screen items-center justify-center text-white">
      <p class="text-8xl uppercase">{{ data?.title }}</p>
    </div>
  </transition>
</template>
