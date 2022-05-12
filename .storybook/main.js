module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  styles: ["../src/components/GlobalStyle/GlobalStyle.js"],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      include: /node_modules/,
      test: /\.mjs$/,
      type: "javascript/auto",
    });
    return config;
  },
};