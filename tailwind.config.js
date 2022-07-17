const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                100: "100",
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],

    daisyui: {
        themes: ["light", "dark"],
        darkTheme: "dark",
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
};
