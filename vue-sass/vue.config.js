module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/style/_variables.scss";
            @import "@/style/_mixins.scss";
          `,
      },
    },
  },
};
