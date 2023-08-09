import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueScrollTo from 'vue-scrollto'


loadFonts()

//const vuetify2 = createVuetify();

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(VueScrollTo)
app.mount('#app')
