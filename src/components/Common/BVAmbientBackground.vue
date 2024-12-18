<!-- src/components/Common/BVAmbientBackground.vue -->
<template>
    <div ref="ambientContainer" class="ambient-container">
      <div ref="ambient" class="ambient"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
  
  class BVAmbient {
    private container: HTMLElement;
    private max_transition_speed: number;
    private min_transition_speed: number;
    private particle_number: number;
    private particle_maxwidth: number;
    private particle_minwidth: number;
    private particle_background: string;
  
    constructor({
      selector,
      max_transition_speed = 12000,
      min_transition_speed = 8000,
      particle_number = 30,
      particle_maxwidth = 60,
      particle_minwidth = 10,
      particle_background = "#58c70c"
    }: {
      selector: string;
      max_transition_speed?: number;
      min_transition_speed?: number;
      particle_number?: number;
      particle_maxwidth?: number;
      particle_minwidth?: number;
      particle_background?: string;
    }) {
      this.container = document.querySelector(selector) as HTMLElement;
      this.max_transition_speed = max_transition_speed;
      this.min_transition_speed = min_transition_speed;
      this.particle_number = particle_number;
      this.particle_maxwidth = particle_maxwidth;
      this.particle_minwidth = particle_minwidth;
      this.particle_background = particle_background;
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
  
      particle.classList.add('bvambient_particle');
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background-color: ${this.particle_background};
        opacity: ${Math.random() * 0.2};
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
      `;
  
      this.container.appendChild(particle);
      this.animateParticle(particle);
    }
  
    animateParticle(particle: HTMLElement): void {
      const animateStep = () => {
        const newLeft = Math.random() * window.innerWidth;
        const newTop = Math.random() * window.innerHeight;
        const transitionSpeed = Math.random() * (this.max_transition_speed - this.min_transition_speed) + this.min_transition_speed;
  
        particle.style.transitionDuration = `${transitionSpeed}ms`;
        particle.style.left = `${newLeft}px`;
        particle.style.top = `${newTop}px`;
  
        setTimeout(animateStep, transitionSpeed);
      };
      animateStep();
    }
  }
  
  export default defineComponent({
    name: 'BVAmbientBackground',
    setup() {
      let ambientInstance: BVAmbient | null = null;
  
      onMounted(() => {
        ambientInstance = new BVAmbient({
          selector: '.ambient',
          particle_background: '#FFC107'
        });
      });
  
      onBeforeUnmount(() => {
        if (ambientInstance) {
          const container = document.querySelector('.ambient');
          if (container) {
            container.innerHTML = '';
          }
        }
      });
  
      return {};
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
  