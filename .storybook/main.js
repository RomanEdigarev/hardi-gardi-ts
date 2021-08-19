const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: { prependData: `@import "src/shared/style/_style";` },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      test: /\.ts$/,
      loader: "ts-loader",
      options: { appendTsSuffixTo: [/\.vue$/] },
    });
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    config.devServer = {
      proxy: "https://khardigardi.srv2.caketest.ru/api/",
    };
    return config;
  },
};
