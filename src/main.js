/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-20 15:18:03
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-03-30 17:18:23
 * @FilePath: \my-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import { Message, MessageBox } from "element-ui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "@/router";
import * as api from "@/config/api";
import useComponent from "@/components/"

Vue.use(ElementUI);
Vue.use(useComponent);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false;
import '@/mock'
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
        Vue.prototype.$api = api
    },
    router,
    render: (h) => h(App),
}).$mount("#app");