// src/theme/printerHiveTheme.ts
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export const  PrinterHiveTheme = {
  dark: true,
  colors: {
    primary: '#FFC107', // Honey yellow
    secondary: '#FFB300', // Darker honey yellow
    background: "#1e1e1e",
    info: '#FFEB3B', // Light yellow
    success: '#4CAF50', // Green
    accent: '#FF8F00', // Orange
    warning: '#FF5722', // Red-orange
    error: '#F44336', // Red
    lightprimary: '#FFF8E1',
    lightsecondary: '#FFF3E0',
    lightsuccess: '#E8F5E9',
    lighterror: '#FFEBEE',
    lightwarning: '#FFF3E0',
    darkText: '#212121', // Dark gray for text
    lightText: '#FFF8E1', // Light text for dark background
    darkprimary: '#FFA000', // Dark honey yellow
    darksecondary: '#FF6F00', // Darker yellow
    borderLight: '#FFE082', // Light yellow border
    inputBorder: '#FFCC80', // Input border color
    containerBg: '#1C1C1C', // Dark background for containers
    surface: '#2C2C2C', // Surface color
    'on-surface-variant': '#FFC107', // Honey yellow for text on surfaces
    facebook: '#4267B2',
    twitter: '#1DA1F2',
    linkedin: '#0E76A8',
    gray100: '#F8F9FD',
    primary200: '#FFCA28', // Lighter honey yellow
    secondary200: '#FFB74D' // Lighter darker yellow
  },
  variables: {
    'border-color': '#FFD54F', // Honey yellow
    'border-radius': '8px' // Rounded edges for components
  }
}

export const LightPrinterHiveTheme = {
  dark: false,
  colors: {
    ...PrinterHiveTheme.colors,
    containerBg: '#FFFFFF', // Light background
    surface: '#F5F5F5', // Light surface
    background: "#ffffff",
  }
}