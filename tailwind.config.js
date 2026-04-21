/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'Noto Sans Arabic', 'Amiri', 'sans-serif'],
        'sans': ['var(--font-sans)', 'Cairo', 'Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        'comic-primary': '#ff4c60',
        'comic-secondary': '#1e1e2f',
        'comic-accent': '#ffd93d',
        'comic-background': '#121212',
        'comic-text': '#ffffff',
        'comic-text-muted': '#b0b0b0',
      },
      spacing: {
        'rtl-safe': '0.5rem',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #ff4c60' },
          '50%': { boxShadow: '0 0 20px #ff4c60, 0 0 30px #ff4c60' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.rtl\\:text-right': {
          '[dir="rtl"] &': {
            textAlign: 'right',
          },
        },
        '.rtl\\:text-left': {
          '[dir="rtl"] &': {
            textAlign: 'left',
          },
        },
        '.rtl\\:flex-row-reverse': {
          '[dir="rtl"] &': {
            flexDirection: 'row-reverse',
          },
        },
        '.rtl\\:space-x-reverse > :not([hidden]) ~ :not([hidden])': {
          '[dir="rtl"] &': {
            '--tw-space-x-reverse': '1',
          },
        },
        '.rtl\\:mr-auto': {
          '[dir="rtl"] &': {
            marginRight: 'auto',
          },
        },
        '.rtl\\:ml-auto': {
          '[dir="rtl"] &': {
            marginLeft: 'auto',
          },
        },
        '.rtl\\:pr-4': {
          '[dir="rtl"] &': {
            paddingRight: '1rem',
          },
        },
        '.rtl\\:pl-4': {
          '[dir="rtl"] &': {
            paddingLeft: '1rem',
          },
        },
        '.rtl\\:pr-12': {
          '[dir="rtl"] &': {
            paddingRight: '3rem',
          },
        },
        '.rtl\\:pl-12': {
          '[dir="rtl"] &': {
            paddingLeft: '3rem',
          },
        },
        '.rtl\\:left-4': {
          '[dir="rtl"] &': {
            left: '1rem',
            right: 'auto',
          },
        },
        '.rtl\\:right-4': {
          '[dir="rtl"] &': {
            right: '1rem',
            left: 'auto',
          },
        },
        '.rtl\\:left-2': {
          '[dir="rtl"] &': {
            left: '0.5rem',
            right: 'auto',
          },
        },
        '.rtl\\:right-2': {
          '[dir="rtl"] &': {
            right: '0.5rem',
            left: 'auto',
          },
        },
        '.rtl\\:left-auto': {
          '[dir="rtl"] &': {
            left: 'auto',
          },
        },
        '.rtl\\:right-auto': {
          '[dir="rtl"] &': {
            right: 'auto',
          },
        },
        '.rtl\\:mr-0': {
          '[dir="rtl"] &': {
            marginRight: '0',
          },
        },
        '.rtl\\:ml-2': {
          '[dir="rtl"] &': {
            marginLeft: '0.5rem',
          },
        },
        '.rtl\\:justify-end': {
          '[dir="rtl"] &': {
            justifyContent: 'flex-end',
          },
        },
        '.arabic-text': {
          fontFamily: 'Cairo, "Noto Sans Arabic", Amiri, sans-serif',
          lineHeight: '1.8',
          letterSpacing: '0.02em',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}