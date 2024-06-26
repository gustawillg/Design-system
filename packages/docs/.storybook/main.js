module.exports = {
  "stories": [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },

  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-system/'
    }

    return config
  }
}
