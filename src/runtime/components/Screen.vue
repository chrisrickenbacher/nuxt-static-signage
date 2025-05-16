<script setup lang="ts">
import { player, findNextIndex } from './../player'
import {
  useAsyncData,
  useRoute,
  ref,
  resolveComponent,
  onMounted,
  useRuntimeConfig,
  queryCollection
} from '#imports'
import type { ScreenMap } from './../types'

const route = useRoute()
const options = useRuntimeConfig().public.signage as any

const { data: scenes } = await useAsyncData<any[], ScreenMap>('home', () =>
  queryCollection('content')
    .select('screens', 'layout', 'data', 'duration', 'scheduler', 'position')
    .where('screens', 'LIKE', `%${route.params.id}%`)
    .order('position', 'ASC')
    .all()
)
const components: any[] = []
scenes.value?.forEach((s) => {
  components.push({
    component: resolveComponent(
      `${options.layouts.prefix}${s.layout.charAt(0).toUpperCase()}${s.layout
        .slice(1)
        .toLowerCase()}`
    ),
    data: s.data,
    layout: s.layout,
    duration: s.duration || options.player.defaultDuration,
    scheduler: {
      dateFrom: s.scheduler.dateFrom || null,
      dateTo: s.scheduler.dateTo || null,
      days: s.scheduler.days || null,
      timeFrom: s.scheduler.timeFrom || null,
      timeTo: s.scheduler.timeTo || null
    }
  })
})

const index = ref(findNextIndex(components, 0))

const updateIndex = (newValue) => {
  index.value = newValue
}

onMounted(() => {
  player(components, index.value === true ? 0 : index.value, updateIndex)
})
</script>

<template>
  <div
    class="no-scrollbar h-screen w-screen overflow-hidden overscroll-none bg-black"
  >
    <MouseNav />
    <transition
      leave-active-class="transition ease-out duration-700"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      class="h-screen w-screen overflow-hidden overscroll-none"
    >
      <component
        v-if="typeof index != 'boolean'"
        :is="components[index].component"
        :data="components[index].data"
      />
      <div
        v-else
        class="flex items-center justify-center text-center text-lg font-thin uppercase text-white"
      >
        No scene
      </div>
    </transition>
  </div>
</template>
