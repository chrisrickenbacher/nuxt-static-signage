# Customization

## Create your own layouts

If you want to use your own layout types in a scene you simply need to create new component for it under `components/`. Make sure the component is using the correct prefix `Layout[Yourcustomtype].vue`.

1. Create a new components like the example below

```vue
<!-- components/LayoutSubtitle.vue -->
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
    <div class="flex h-screen w-screen items-center justify-center text-white">
      <p class="text-8xl uppercase">{{ data?.title }}</p>
      <p class="text-xl">{{ data?.subtitle }}</p>
    </div>
  </transition>
</template>

```

2. Create your scene yaml file including the correct layout type and required data

```yaml
# content/your-custom-scene.yaml
...

layout: subtitle
data:
  title: Your custom title
  subtitle: Your custom subtitle

...
```

3. Load all custom components globally
```js
// nuxt.config.ts
export default defineNuxtConfig({
    // ...
    components: {
        global: true,
        dirs: ['~/components']
    },
    //..
})

```

## Change default layouts

To overwrite existing default layouts you just need to create a components with the same name as the original one under `components/`. The rest is the same as described below under `Create your own layouts`.

List of components used as default layouts:
- `LayoutIframe.vue`
- `LayoutImage.vue`
- `LayoutTitle.vue`

