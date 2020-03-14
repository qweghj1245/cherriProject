module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/all.scss";',
      },
    },
  },
};