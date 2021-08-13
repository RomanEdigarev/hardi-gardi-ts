const path = require("path");

module.exports = {
  publicPath: "/dist/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/shared/style/_style";`,
      },
    },
  },
  devServer: {
    proxy: "https://khardigardi.srv2.caketest.ru/api/",
  },
};
