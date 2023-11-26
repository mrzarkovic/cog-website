/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "-gradient-x": "-gradient-x 15s ease infinite",
                "gradient-xy": "gradient-xy 15s ease infinite",
            },
            keyframes: {
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center center",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "-gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        function ({ addComponents }) {
            addComponents({
                ".hide-line-number": {
                    paddingLeft: "1.25rem",
                },
                ".hide-line-number::before": {
                    display: "none !important",
                },
            });
        },
    ],
    daisyui: {
        themes: ["sunset"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: false, // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
