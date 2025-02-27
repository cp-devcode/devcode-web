/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        moto: ['Moto', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0A0F1C',
          lighter: '#141E33',
          accent: '#64FFDA'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale': 'scale 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s linear infinite',
        'pulse-rings': 'pulseRings 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.6)' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        pulseRings: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.3'
          },
          '50%': {
            transform: 'scale(1.5)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.3'
          }
        }
      }
    },
  },
  plugins: [],
};