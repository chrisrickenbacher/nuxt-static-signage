import fs from 'node:fs/promises'
import {
  defineNuxtModule,
  createResolver,
  installModule,
  addTemplate,
  extendPages,
  addComponentsDir,
} from '@nuxt/kit'
import { defu } from 'defu'

export interface ModuleOptions {
  player: {
    /**
     * Default duration of scene
     *
     * @default 4
     */
    defaultDuration: number
  }
  layouts: {
    /**
     * Prefix for custom layout components
     *
     * @default "Layout"
     */
    prefix: string
  }
  /**
   * Enable kiosk mode
   *
   * @default false
   */
  kioskMode: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-static-signage',
    configKey: 'signage',
  },
  defaults: {
    player: {
      defaultDuration: 4,
    },
    layouts: {
      prefix: 'Layout',
    },
    kioskMode: false,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.signage = defu(nuxt.options.runtimeConfig.public.signage, {
      player: {
        defaultDuration: options.player.defaultDuration,
      },
      layouts: {
        prefix: options.layouts.prefix,
      },
      kioskMode: options.kioskMode,
    })

    addTemplate({
      filename: 'content.config.js',
      getContents: async () => {
        const contentConfigPath = resolve('./runtime/content.config.js')
        try {
          const fileContent = await fs.readFile(contentConfigPath, 'utf-8')
          return fileContent
        }
        catch (error) {
          console.error('Failed to read content.config.ts from module:', error)
          return `// Error: Could not load content.config.ts from module\nexport default {};`
        }
      },
      write: true,
    })

    await installModule('@nuxt/content')

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolve('./runtime/*.{mjs,js,ts}'),
          ],
        },
      },
    })

    await installModule('@vite-pwa/nuxt', {
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: '/',
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      client: {
        installPrompt: true,
        periodicSyncForUpdates: 3600,
      },
    })

    extendPages((pages) => {
      pages.push(
        {
          name: 'home',
          path: '/',
          file: resolve('./runtime/components/Home'),
        },
        {
          name: 'screens',
          path: '/screen',
          redirect: '/',
        },
        {
          name: 'screen',
          path: '/screen/:id',
          file: resolve('./runtime/components/Screen'),
        },
      )
    })

    addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true,
    })
  },
})
