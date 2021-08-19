module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/",
  outputDir: "app",
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
