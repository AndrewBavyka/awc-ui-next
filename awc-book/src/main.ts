import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import router from './router'
import '../../awc-ui/src/main'

const app = createApp(App);

app.use(router);
app.mount("#app");