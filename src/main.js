// main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件
import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(axios).use(router).mount('#app')
