import type { BrowserWindow } from 'electron'

export interface PluginConfig {
  name: string
  main: string
  emoji: string
  width: number
  height: number
  description: {
    en: string
    cn: string
  }
  multiple?: boolean
}

export type PluginLocale = 'en' | 'cn'
export type PluginTheme = 'light' | 'dark'

export interface PluginData {
  data?: Record<string, any>
  setting?: Record<string, any>
  control?: {
    x?: number
    y?: number
    boot?: boolean
    sticky?: boolean
    navbar?: boolean
    theme?: PluginTheme
  }
}
export interface PluginStorage extends PluginData {
  get: <K extends keyof PluginData>(key: K) => PluginData[K]
  set: <K extends keyof PluginData>(
    key: K,
    value: PluginData[K],
  ) => Promise<void>
  clear: () => Promise<void>
}

export interface PluginOptions {
  name: string
  window: BrowserWindow
}
