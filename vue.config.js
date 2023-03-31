/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-20 15:18:03
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-30 20:01:52
 * @FilePath: \my-project\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true,
  devServer: {
    port: 8080,
    host: 'localhost',
    // proxy:{
    //   "/mock":{
    //     target:"localhost"
    //   }
    // }
  },
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  productionSourceMap: false,
})
