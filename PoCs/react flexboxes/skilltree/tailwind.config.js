module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                skilltree: {
                    purple: {
                        dark: '#0a002a',
                        mediumdark: '#1c0a4f',
                        medium: '#120639',
                        mediumlight: '#b068c5',
                        light: '#7e2199',
                        lightest: '#d795e8',
                    }
                }
            }
        },
    },
    plugins: [],
}
