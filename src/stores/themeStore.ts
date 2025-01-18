import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark')
    }
    const savedTheme = localStorage.getItem('theme')

    return {
      isLight: savedTheme === 'light',
    }
  },
  actions: {
    toggleTheme() {
      this.isLight = !this.isLight
      const newTheme = this.isLight ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
    },
  },
})
