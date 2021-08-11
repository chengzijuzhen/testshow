// main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件
import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(axios).use(router).mount('#app');

//var axios = require('axios')
///axios.defaults.baseURL = 'http://localhost:8082/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
//Vue.prototype.$axios = axios
//Vue.config.productionTip = false

//axios.defaults.baseURL = 'http://localhost:9091/api';

// axios.defaults.baseURL = 'https://api.example.com';