import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { PrinterHiveTheme, LightPrinterHiveTheme } from '@/theme/printerHiveTheme'
import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'

const app = createApp(App)

// Create Pinia and Vuetify instances
const pinia = createPinia()
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'LightPrinterHiveTheme', // set default theme
    themes: {
      PrinterHiveTheme,
      LightPrinterHiveTheme
    }
  },
  components,
  directives
})

axios.defaults.baseURL = 'http://localhost'

// Mount the app
app.use(pinia)
app.use(router)
app.use(vuetify)

// Watch for changes in the Pinia store's theme and update the Vuetify theme
app.mount('#app')
