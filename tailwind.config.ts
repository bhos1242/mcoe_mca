import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#E4103E',
          foreground: 'hsl(0, 0%, 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(200, 70%, 50%)',
          foreground: 'hsl(200, 10%, 10%)'
        },
        muted: {
          DEFAULT: 'hsl(210, 20%, 90%)',
          foreground: 'hsl(210, 20%, 30%)'
        },
        accent: {
          DEFAULT: 'hsl(25, 80%, 50%)',
          foreground: 'hsl(25, 10%, 10%)'
        },
        destructive: {
          DEFAULT: 'hsl(0, 85%, 60%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        border: 'hsl(210, 20%, 80%)',
        input: 'hsl(210, 20%, 85%)',
        ring: 'hsl(350, 85%, 70%)',
        chart: {
          '1': 'hsl(350, 85%, 45%)',
          '2': 'hsl(200, 70%, 50%)',
          '3': 'hsl(25, 80%, 50%)',
          '4': 'hsl(160, 60%, 40%)',
          '5': 'hsl(270, 60%, 50%)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

