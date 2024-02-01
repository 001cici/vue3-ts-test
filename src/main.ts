import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入Pinia状态持久化插件
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import 'normalize.css'
// 导入Unocss样式
import 'uno.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 创建Pinia实例
const pinia = createPinia()
// 使用Pinia状态持久化插件
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(router)

app.mount('#app')
