/*const withCSS = require('@zeit/next-css');
module.exports = withCSS({
   webpack: config => {
      config.module.rules.push({
         test: /\.md$/,
         use: "raw-loader"
       });
      return config;
   }
 });*/

const withImages = require('next-images')
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
module.exports = withImages(
  withSass(
    withCSS({
      webpack: config => {
        config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader"
        });
        return config;
      }
    })
  )
) 
