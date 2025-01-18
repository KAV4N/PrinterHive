<template>
  <div class="ambient-container">
    <div ref="ambient" class="ambient"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { AmbientBackground } from '@/utils/AmbientBackground'

export default defineComponent({
  name: 'AppAmbientBackground',

  props: {
    color: {
      type: String as PropType<string>,
      default: '#FFC107',
    },
    particleCount: {
      type: Number as PropType<number>,
      default: 30,
    },
    particleSize: {
      type: Number as PropType<number>,
      default: 15,
    },
  },

  data() {
    return {
      ambientInstance: null as AmbientBackground | null,
    }
  },

  mounted() {
    this.ambientInstance = new AmbientBackground({
      selector: '.ambient',
      color: this.color,
      particleCount: this.particleCount,
      particleSize: this.particleSize,
    })
  },

  beforeUnmount() {
    if (this.ambientInstance) {
      this.ambientInstance.cleanup()
      this.ambientInstance = null
    }
  },
})
</script>

<style scoped>
.ambient-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.ambient {
  width: 100%;
  height: 100%;
}
:deep(.bvambient_particle) {
  position: absolute;
  pointer-events: none;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  will-change: transform;
  backface-visibility: hidden;
}
</style>
