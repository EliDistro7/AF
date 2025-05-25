/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
 theme: {
  extend: {
    fontFamily: {
      'baskerville': ['Libre Baskerville', 'Baskerville', 'Georgia', 'serif'],
      'sans': ['Libre Baskerville', 'Baskerville', 'Georgia', 'serif'], // Override default sans
    },
    fontWeight: {
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'black': '900',
    },
    colors: {
      // Enhanced Primary color palette - Deeper, more contrasting blues
      primary: {
        50: '#f0f7ff',
        100: '#e0efff',
        200: '#bae0ff',
        300: '#7cc7ff',
        400: '#36abff',
        500: '#0c8ce9',
        600: '#0066cc',
        700: '#0052a3',
        800: '#004485',
        900: '#003366',
        950: '#001d3d',
      },
      // Enhanced Secondary color palette - Richer grays with better contrast
      secondary: {
        50: '#ffffff',
        100: '#f8fafc',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#000000',
      },
      // Enhanced Accent color palette - Vibrant cyans for highlights
      accent: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344',
      },
      // Enhanced text colors for better readability
      text: {
        primary: '#0f172a',      // Very dark for main text
        secondary: '#1e293b',    // Dark gray for secondary text
        tertiary: '#475569',     // Medium gray for tertiary text
        light: '#64748b',        // Light gray for subtle text
        inverse: '#ffffff',      // White for dark backgrounds
      },
      // Background colors optimized for the animated background
      background: {
        primary: 'rgba(255, 255, 255, 0.95)',     // Semi-transparent white
        secondary: 'rgba(248, 250, 252, 0.90)',   // Light gray with transparency
        tertiary: 'rgba(241, 245, 249, 0.85)',    // Lighter gray
        overlay: 'rgba(255, 255, 255, 0.70)',     // For overlays
        glass: 'rgba(255, 255, 255, 0.10)',       // Glass morphism effect
      },
      // Success colors - Enhanced greens
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
      // Warning colors - Enhanced oranges/ambers
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
      // Error colors - Enhanced reds
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      // Enhanced Neutral colors with better contrast steps
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      }
    },
    // Enhanced shadows with better contrast and depth
    boxShadow: {
      'corporate': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
      'corporate-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
      'corporate-xl': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
      'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      'glass-lg': '0 25px 45px 0 rgba(31, 38, 135, 0.25)',
      'text-shadow': '0 2px 4px rgba(15, 23, 42, 0.5)',
      'text-shadow-lg': '0 4px 8px rgba(15, 23, 42, 0.6)',
    },
    // Enhanced border colors
    borderColor: {
      'corporate': 'rgba(186, 224, 255, 0.8)',
      'corporate-strong': 'rgba(12, 140, 233, 0.3)',
      'glass': 'rgba(255, 255, 255, 0.18)',
    },
    // Text shadow utilities for better readability on animated backgrounds
    textShadow: {
      'sm': '0 1px 2px rgba(15, 23, 42, 0.5)',
      'DEFAULT': '0 2px 4px rgba(15, 23, 42, 0.5)',
      'lg': '0 4px 8px rgba(15, 23, 42, 0.6)',
      'xl': '0 6px 12px rgba(15, 23, 42, 0.7)',
    },
    // Backdrop blur utilities for glass morphism effects
    backdropBlur: {
      'xs': '2px',
      'sm': '4px',
      'DEFAULT': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    // Enhanced spacing for better readability
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '112': '28rem',
      '128': '32rem',
    },
    // Typography scale for better hierarchy
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
      'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
      '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],
      '5xl': ['3rem', { lineHeight: '1', fontWeight: '800' }],
      '6xl': ['3.75rem', { lineHeight: '1', fontWeight: '900' }],
      '7xl': ['4.5rem', { lineHeight: '1', fontWeight: '900' }],
      '8xl': ['6rem', { lineHeight: '1', fontWeight: '900' }],
      '9xl': ['8rem', { lineHeight: '1', fontWeight: '900' }],
    },
  }
},
  plugins: [],
}

