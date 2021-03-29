const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.blueGray,
                rose: colors.rose,
                violet: colors.violet,
            }
        },
        
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
};
