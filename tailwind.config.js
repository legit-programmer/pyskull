/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            modern: ["Amatic SC", "cursive"],
            code: ['Ubuntu Mono', 'monospace']
        },
        extend: {},
    },
    plugins: [],
};
