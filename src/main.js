import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import scrollAnimation from './directives/scrollAnimation'

const app = createApp(App)

app.directive('scroll', scrollAnimation)
app.use(router)
app.mount('#app')
