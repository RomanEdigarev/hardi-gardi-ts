const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/shared/style/_style";`,
      },
    },
  },
};
