import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { PrinterHiveTheme, LightPrinterHiveTheme } from '@/theme/printerHiveTheme'
import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios';



const vuetify = createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') === 'dark' ? 'PrinterHiveTheme' : 'LightPrinterHiveTheme',
    themes: {
      PrinterHiveTheme,
      LightPrinterHiveTheme
    }
  },
  components,
  directives
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')