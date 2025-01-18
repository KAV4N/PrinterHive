import type { AmbientOptions } from '@/types/ambient'

export class AmbientBackground {
  private container: HTMLElement
  private options: Required<AmbientOptions>
  private particles: HTMLElement[] = []
  private animationFrameId: number | null = null

  private defaultOptions: Required<AmbientOptions> = {
    selector: '',
    color: '#58c70c',
    particleCount: 30,
    particleSize: 5,
  }

  constructor(options: AmbientOptions) {
    this.options = { ...this.defaultOptions, ...options }
    const container = document.querySelector(this.options.selector)

    if (!container) {
      throw new Error(`Element with selector "${this.options.selector}" not found`)
    }

    this.container = container as HTMLElement
    this.createParticles()
    this.animate()
  }

  private createParticles(): void {
    for (let i = 0; i < this.options.particleCount; i++) {
      this.spawnParticle()
    }
  }

  private getRandomPosition(): { x: number; y: number } {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }
  }

  private getRandomVelocity(): { vx: number; vy: number } {
    return {
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }
  }

  private spawnParticle(): void {
    const particle = document.createElement('div')
    const size = this.options.particleSize * (Math.random() * (5 - 2 + 1) + 2)
    const position = this.getRandomPosition()
    const velocity = this.getRandomVelocity()

    particle.classList.add('bvambient_particle')

    Object.assign(particle.style, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: this.options.color,
      opacity: String(0.1 + Math.random() * 0.3),
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: 'translate(0, 0)',
      transition: 'transform 0.1s linear',
    })

    ;(particle as any).velocity = velocity
    ;(particle as any).position = position

    this.container.appendChild(particle)
    this.particles.push(particle)
  }

  private animate = (): void => {
    this.particles.forEach((particle) => {
      const pos = (particle as any).position
      const vel = (particle as any).velocity

      pos.x += vel.vx
      pos.y += vel.vy

      if (pos.x <= 0 || pos.x >= window.innerWidth) {
        vel.vx *= -1
      }
      if (pos.y <= 0 || pos.y >= window.innerHeight) {
        vel.vy *= -1
      }

      pos.x = Math.max(0, Math.min(window.innerWidth, pos.x))
      pos.y = Math.max(0, Math.min(window.innerHeight, pos.y))

      particle.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    })

    this.animationFrameId = requestAnimationFrame(this.animate)
  }

  public cleanup(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
    this.particles.forEach((particle) => particle.remove())
    this.particles = []
    this.container.innerHTML = ''
  }
}
