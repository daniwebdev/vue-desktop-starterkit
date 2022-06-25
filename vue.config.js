// const fs = require('fs');
// var webpack = require('webpack');

// var storeModules = fs.readdirSync(__dirname+'/src/renderer/store').filter(file => file !== 'index.js').map(file => {
//   return require(__dirname + `/src/renderer/store/${file}`);
// });

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    pluginOptions: {
      electronBuilder: {
        preload: "src/preload.js",
        // nodeIntegration: true,
      },
    },
    configureWebpack: () => {
      return {
        plugins: [
          // new webpack.DefinePlugin({
          //   'somevar': storeModules,
          // })
        ]
      }
    },
    chainWebpack: (config) => {


      config.plugin("html").tap((args) => {
        args[0].title = "CONET.ID";
        return args;
      });
    },
  };