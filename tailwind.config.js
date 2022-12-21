/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "peach-600": "#FF8787",
                "peach-200": "#F8C4B4",
                "green-200": "#E5EBB2",
                "green-600": "#BCE29E",
                "grey-200": "#525252",
                "grey-400": "#414141",
                "grey-600": "#313131",
                "red-600": "#CA3E47",
                "red-400": "#D61C4E",
                "navy-400": "#293462",
                "yellow-200": "#FEDB39",
                "blue-100": "#1CD6CE",
            },
            fontFamily: {
                sans: ["Signika Negative", "sans-serif"],
            },
        },
    },
};
