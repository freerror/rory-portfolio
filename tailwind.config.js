/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
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
            }
        },
    },
    plugins: [],
}
