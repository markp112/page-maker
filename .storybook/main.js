module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
