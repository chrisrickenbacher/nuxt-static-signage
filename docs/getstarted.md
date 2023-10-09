# Get started

## Installation

1. Add `nuxt-static-signage` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-static-signage

# Using yarn
yarn add nuxt-static-signage

# Using npm
npm install nuxt-static-signage
```

1. Add `nuxt-static-signage` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-static-signage'
  ],
  signage: {
    // module options
  },
})
```
- [Documentation module options](./options.md)

## Manage content

For each scene place a yaml file under `content/` with the following content:
```yaml 
# content/your-scene.yaml

screens:           # array of screens this scene is displayed on
  - screen-id      # screen id
  - "1234"         # - full numbers must go in a quotes 

layout: iframe     # layout type, see available layout types below

duration: 20       # duration the scene is displayed in seconds

position: 1        # number used for sorting scenes on the same screen

data:              # data to be passed to the layout (check layout types below)

scheduler:
  dateFrom:        # optional start date scene is displayed, format DD.MM.YYYY
  dateTo:          # optional end date scene is displayed, format DD.MM.YYYY
  timeFrom:        # optional start time scene is displayed, format HH:MM
  timeTo:          # optional end time scene is displayed, format HH:MM
  days: [ 1, 2 ]   # array of days to display, 1 = monday, 2 = tuesday, ...

```

### Available layout types

- [Check how to create your own layouts or change the default ones](customization.md)

#### `image`

Full screen image.

```yaml
# content/your-scene.yaml
...

data:
  imageUrl: "https://picsum.photos/id/2/1000/2000"

...
```


#### `title`

Centered title.

```yaml
# content/your-scene.yaml
...

data:
  title: Test2

...
```


#### `iframe`

Full screen iframe

```yaml
# content/your-scene.yaml
...

data:
  iframeUrl: https://example.com

...
```