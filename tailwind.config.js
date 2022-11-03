const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                asap: "asap"
            },
            backgroundImage: {
                'r-pattern': "url('/images/bg-r-pattern.svg')",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.parallax-wrapper': {
                    'height': '100vh',
                    'overflow-x': 'hidden',
                    'overflow-y': 'auto',
                    'perspective': '2px'
                },
                '.parallax-section': {
                    'position': 'relative',
                    'transform-style': 'preserve-3d',
                    'height': '100vh',
                    'display': 'flex',
                }
            })
        })
    ],
}
