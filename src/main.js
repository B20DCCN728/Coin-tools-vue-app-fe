import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import PrimeVue from "primevue/config";
import 'ant-design-vue/dist/reset.css';
import Aura from '@primevue/themes/aura';


const app = createApp(App);

app.use(Antd);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
// app.use(router);
app.mount('#app');
