<template>
  <main class="flex h-screen w-screen items-center justify-center bg-black">
    <div
      class="w-full overflow-auto rounded-lg md:max-h-96 md:w-1/2 md:border md:border-gray-800 lg:w-1/4"
    >
      <div class="sticky top-0 z-10 bg-black p-5">
        <p class="text-center text-lg font-thin uppercase text-white">
          Available screens:
        </p>
      </div>

      <div class="px-5 pb-5" v-if="Object.keys(screens).length > 0">
        <ul>
          <li
            v-for="(value, key) in screens"
            :key="key"
            class="relative flex justify-between gap-x-6 px-4 py-5 hover:rounded-full hover:bg-slate-800"
          >
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto">
                <p class="text-lg font-semibold leading-6 text-white">
                  <NuxtLink :href="'screen/' + key.toString().toLowerCase()">
                    <span class="absolute inset-x-0 -top-px bottom-0" />
                    {{ key }}
                  </NuxtLink>
                </p>
              </div>
            </div>
            <div
              class="flex shrink-0 items-center gap-x-4 text-xs uppercase text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="px-5 pb-5 text-white">No screens available.</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAsyncData, queryCollection } from '#imports'
import type { ScreenMap } from './../types'

const { data } = await useAsyncData<any[], ScreenMap>('home', () =>
  queryCollection('content').select('screens').all()
)

// create array for each screen
const screens: ScreenMap = {}
data.value?.forEach((scene) => {
  if (scene.screens) {
    scene.screens.forEach((s) => {
      if (!screens[s]) {
        screens[s] = []
      }
      screens[s].push(scene)
    })
  }
})
</script>
