module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/all.scss";',
      },
    },
  },
};