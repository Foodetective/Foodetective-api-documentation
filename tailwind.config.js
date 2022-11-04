/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: {
        light: '#24288c',
        DEFAULT: '#0f113b',
        dark: '#0f113b'
      },
      secondary: {
        light: '#2f38b8',
        DEFAULT: '#1a1f67',
        dark: '#050616'
      },
      tertiary: {
        light: '#b2beff',
        DEFAULT: '#4c68ff',
        dark: '#4c68ff'
      },
      prism: {
        light: '#474b5e',
        DEFAULT: '#1a1f36',
        dark: '#30354a'
      },
      currentColor: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      },
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    container: {
      center: true,

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      55: '55px',
      60: '60px'
    },
    stroke: {
      currentColor: 'currentColor',
      linejoin: {
        round: 'round',
      },
      linecap: {
        round: 'round'
      },
      miterlimit: {
        10: '10'
      }
    },
    extend: {},
  },
  plugins: [],
}
