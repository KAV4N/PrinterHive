<template>
  <v-card class="ma-2">
    <v-card-title class="text-subtitle-1">Status</v-card-title>
    <v-card-text>
      <v-table density="compact" class="status-table">
        <tbody>
          <tr>
            <td class="font-weight-bold">Tool Position</td>
            <td class="pa-4">
              X: {{ printerStore.position.x.toFixed(2) }}<br />
              Y: {{ printerStore.position.y.toFixed(2) }}<br />
              Z: {{ printerStore.position.z.toFixed(2) }}
            </td>
          </tr>
          <tr>
            <td class="font-weight-bold">Extruder Drives</td>
            <td class="pa-4">Drive 0: {{ printerStore.extruderDrive.toFixed(1) }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Speeds</td>
            <td class="pa-4">
              X: {{ printerStore.speeds.x.toFixed(1) }} mm/s<br />
              Y: {{ printerStore.speeds.y.toFixed(1) }} mm/s<br />
              Z: {{ printerStore.speeds.z.toFixed(1) }} mm/s
            </td>
          </tr>
          <tr>
            <td class="font-weight-bold">Sensors</td>
            <td class="pa-4">
              Voltage: {{ printerStore.voltage.toFixed(1) }} V<br />
              MCU Temp: {{ printerStore.mcuTemperature.toFixed(1) }} °C<br />
              Tool 0 Temp: {{ printerStore.toolTemperature.toFixed(1) }} °C<br />
              Bed Temp: {{ printerStore.bedTemperature.toFixed(1) }} °C<br />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePrinterStore } from '@/stores/printerStore'

export default defineComponent({
  name: 'DemoStatusPanel',
  data() {
    return {
      printerStore: usePrinterStore(),
    }
  },
})
</script>

<style scoped>
.status-table {
  font-size: 0.875rem;
}
</style>
