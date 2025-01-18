import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { PrinterHiveTheme, LightPrinterHiveTheme } from '@/theme/printerHiveTheme'

export default createVuetify({
    theme: {
      defaultTheme: 'LightPrinterHiveTheme', 
      themes: {
        PrinterHiveTheme,
        LightPrinterHiveTheme
      }
    },
    components,
    directives
  });