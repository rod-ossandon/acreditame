import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                'goldman': ['Goldman', 'sans-serif'],
                'sans': ['Goldman', 'sans-serif'],
            },

            colors: {
                'tech-bg': '#050014',
                'tech-card': '#0f172a',
                'gold-primary': '#D4AF37',
                'gold-secondary': '#F59E0B',
                'gold-light': '#FDE68A',
                'gold-dark': '#92400E',
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },

            // UNIFICADO: Todas las animaciones en un solo objeto
            animation: {
                'blob': 'blob 15s infinite',
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },

            // UNIFICADO: Todos los keyframes en un solo objeto
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.6', transform: 'scale(1.1)' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },

    plugins: [forms],
};
