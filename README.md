<div align="center">

# Nuxt Static Signage

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]


Static signage solution based on [Nuxt Content](https://nuxt.com/modules/content) for Nuxt 3.


<h3>

[📖 Documentation](/docs) | [✨ Release Notes](/CHANGELOG.md)

</h3>

</div>

## Features

- **📺 Slideshows:** Define screens that run slideshows with multiple scenes. Use existing layouts for your scenes such as image slideshows, iframe implementations or simple titles.

- **⏳ Scheduler:** Schedule your scenes to play at specific times and days of the week.

- **🪚 Custom Layouts:** Use your own custom layout for your scenes.

## Quick install

1. Add `nuxt-static-signage` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-static-signage

# Using yarn
yarn add nuxt-static-signage

# Using npm
npm install nuxt-static-signage
```

2. Add `nuxt-static-signage` to the `modules` section of `nuxt.config.ts`

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

## Documentation

[Checkout the documentation](/docs)

## License

Published under the [MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-static-signage/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@nuxtjs/color-mode

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-static-signage.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-static-signage

[license-src]: https://img.shields.io/npm/l/nuxt-static-signage.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-static-signage
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com