/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightest-gray": "#F5F7FA",
        "light-gray": "hsl(228, 6%, 85%)",
        "medium-gray": "hsl(224, 8%, 36%)",
        "dark-gray": "#334155",
        "nav-bg": "rgba(255, 255, 255, .5)",
        "lime-green": "hsl(136, 65%, 51%)",
        "cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "transparent-green": "#f2fff2",
        "dark-blue": "hsl(233, 26%, 24%)",
        "lightest-peach": "#f1bfb8",
        "light-peach": "#ef8172",
        "medium-peach": "#ff4c68",
        "dark-peach": "#DA0463",
        "grayish-white": "#f0f4f8",
      }
    },
    screens: {
      'sm': {'min': '320px', 'max': '639px'},
      'md': {'min': '640px', 'max': '968px'},
      'lg': {'max': '1124px'},
      'xl': {'max': '1124px'},
      '2xl': {'max': '1124px'},
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }

  },
  plugins: [],
}