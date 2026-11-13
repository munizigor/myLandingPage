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
  		fontFamily: {
  			sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  			serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
  			mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'Consolas', 'monospace']
  		},
  		fontSize: {
  			display: ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.02em', fontWeight: '500' }],
  			'heading-1': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.015em', fontWeight: '500' }],
  			'heading-2': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em', fontWeight: '500' }],
  			'heading-3': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
  			'body-lg': ['1.125rem', { lineHeight: '1.875rem' }],
  			body: ['1rem', { lineHeight: '1.625rem' }],
  			small: ['0.875rem', { lineHeight: '1.375rem' }],
  			label: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
  			eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em', fontWeight: '500' }],
  			data: ['0.875rem', { lineHeight: '1.25rem' }]
  		},
  		boxShadow: {
  			'ds-sm': 'var(--shadow-sm)',
  			'ds-md': 'var(--shadow-md)'
  		},
  		maxWidth: {
  			content: 'var(--content-width)',
  			measure: 'var(--measure)'
  		},
  		colors: {
  			success: 'hsl(var(--success))',
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
  				DEFAULT: 'hsl(var(--primary))',
  				hover: 'hsl(var(--primary-hover))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				soft: 'hsl(var(--accent-soft))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 4px)',
  			sm: 'calc(var(--radius) - 6px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
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
