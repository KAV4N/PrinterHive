<template>
  <div ref="ambientContainer" class="ambient-container">
    <div ref="ambient" class="ambient"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface AmbientOptions {
    selector: string;
    max_transition_speed?: number;
    min_transition_speed?: number;
    particle_number?: number;
    particle_maxwidth?: number;
    particle_minwidth?: number;
    particle_background?: string;
}

interface ParticleStyles {
    width: string;
    height: string;
    backgroundColor: string;
    opacity: number;
    left: string;
    top: string;
}


class AmbientBackground {
  container: HTMLElement;
  max_transition_speed: number;
  min_transition_speed: number;
  particle_number: number;
  particle_maxwidth: number;
  particle_minwidth: number;
  particle_background: string;
  animationFrames: number[];

  constructor({
    selector,
    max_transition_speed = 12000,
    min_transition_speed = 8000,
    particle_number = 30,
    particle_maxwidth = 60,
    particle_minwidth = 10,
    particle_background = "#58c70c"
  }: AmbientOptions) {
    const containerElement = document.querySelector(selector);
    if (!containerElement) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    this.container = containerElement as HTMLElement;
    this.max_transition_speed = max_transition_speed;
    this.min_transition_speed = min_transition_speed;
    this.particle_number = particle_number;
    this.particle_maxwidth = particle_maxwidth;
    this.particle_minwidth = particle_minwidth;
    this.particle_background = particle_background;
    this.animationFrames = [];
    this.init();
  }

  init(): void {
    for (let i = 0; i < this.particle_number; i++) {
      this.createParticle();
    }
  }

  createParticle(): void {
    const particle = document.createElement('div');
    const size = Math.random() * (this.particle_maxwidth - this.particle_minwidth) + this.particle_minwidth;

    const styles: ParticleStyles = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: this.particle_background,
      opacity: Math.random() * 0.2,
      left: `${Math.random() * window.innerWidth}px`,
      top: `${Math.random() * window.innerHeight}px`
    };

    particle.classList.add('bvambient_particle');
    Object.assign(particle.style, styles);

    this.container.appendChild(particle);
    this.animateParticle(particle);
  }

  animateParticle(particle: HTMLElement): void {
    const animateStep = (): void => {
      const newLeft = Math.random() * window.innerWidth;
      const newTop = Math.random() * window.innerHeight;
      const transitionSpeed = Math.random() * (this.max_transition_speed - this.min_transition_speed) + this.min_transition_speed;

      particle.style.transitionDuration = `${transitionSpeed}ms`;
      particle.style.left = `${newLeft}px`;
      particle.style.top = `${newTop}px`;

      const frameId = window.setTimeout(animateStep, transitionSpeed);
      this.animationFrames.push(frameId);
    };
    animateStep();
  }

  cleanup(): void {
    this.animationFrames.forEach(frameId => window.clearTimeout(frameId));
    this.animationFrames = [];
    this.container.innerHTML = '';
  }
}

export default defineComponent( {
  name: 'AppAmbientBackground',
  
  props: {
    particleColor: {
      type: String,
      default: '#FFC107'
    }
  },

  data() {
    return {
      ambientInstance: null as AmbientBackground | null
    };
  },

  mounted() {
    this.ambientInstance = new AmbientBackground({
      selector: '.ambient',
      particle_background: this.particleColor
    });
  },

  beforeUnmount() {
    if (this.ambientInstance) {
      this.ambientInstance.cleanup();
      this.ambientInstance = null;
    }
  }
});
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
  transition: all linear;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>