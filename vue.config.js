const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        Object.assign(args[0], {
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        })
        return args
      })
  }
}
