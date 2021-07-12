module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                primary: "#04C2C9",
                secondary: "#E31B6D",
                "dark-blue": "#1B242F",
                dark: "#252934",
                "dark-gray": "#1E242C",
            },
            inset: {
                "top-3.5": "14px",
            },
            fontSize: {
                "4.5xl": "2.5rem",
            },
            borderWidth: {
                3: "3px",
            },
            boxShadow: {
                full: "0 0 16px 0 rgba(0, 0, 0, 0.2)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
