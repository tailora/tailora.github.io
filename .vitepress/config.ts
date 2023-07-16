import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tailora",
  base: "/",
  description: "Application scaffolding for Laravel",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "assets/logo.svg",

    search: {
      provider: 'local'
    },

    nav: [
      {text: 'Documentation', link: '/getting-started/index'},
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {text: 'What is Tailora?', link: '/getting-started/index'},
          {text: 'Installation', link: '/getting-started/index#installation'},
        ]
      },
      {
        text: 'Configuration',
        link: '/configuration/index',
        items: [
          {text: 'Quasar', link: '/configuration/index'},
          {text: 'Tailwind CSS', link: '/configuration/index'},
          {text: 'Inertia.js', link: '/configuration/index'},
        ]
      },
      {
        text: "Features",
        link: "/features/index",
        items: [
          {text: 'Authentication', link: '/features/index'},
          {text: 'Registration', link: '/features/index'},
          {text: 'Profile Management', link: '/features/index'},
          {text: 'Password Update', link: '/features/index'},
          {text: 'Password Confirmation', link: '/features/index'},
          {text: 'Two Factor Authentication', link: '/features/index'},
          {text: 'Browser Sessions', link: '/features/index'},
          {text: 'API', link: '/features/index'},
          {text: 'Teams', link: '/features/index'},
          {text: 'Localization', link: '/features/index'},
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/tailora/tailora'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Hikmet Can Çelik'
    },
  }
})
