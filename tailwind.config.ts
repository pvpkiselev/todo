import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '391px',
      md: '480px',
    },

    maxWidth: {
      xs: '390px',
      sm: '479px',
      md: '767px',
    },

    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.25rem',
      },

      screens: {
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '767px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        surfaceWhite: 'var(--surface-white)',
        surface01: 'var(--surface-01)',

        success: 'var(--success)',
        accent: 'var(--accent)',

        body01: 'var(--body-01)',
        body02: 'var(--body-02)',

        border: 'var(--border)',
      },

      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
        6: 'var(--spacing-6)',
        7: 'var(--spacing-7)',
        8: 'var(--spacing-8)',
        9: 'var(--spacing-9)',
      },

      borderRadius: {
        none: 'var(--radius-none)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};
export default config;
