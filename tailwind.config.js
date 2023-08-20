module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      position: ['sticky'],
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      animation: {
        'menu-open': 'menuOpen 0.3s',
      },
      keyframes: {
        loginDropIn: {
          '0%': { transform: ' rotate(-30deg) translateY(-200%)', opacity: '0' },
          '100%': { transform: 'rotate(3deg)', opacity: '1' },
        },
        menuOpen: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        DEFAULT: '1000ms',
      },

      screens: {
        'sm': '640px',
        'md': '860px',
        'lg': '1024px',
        'xl': '1280px',

        'mediumScreen': { 'min': '540px', 'max': '1023px' },
        'screenNestHub': { 'min': '12024px', 'max': '1025px' },

      },


      gradientColor: {
        'bg-gradient-to-t': 'linear-gradient(to top, #4f46e5, #000000)',
        'bg-gradient-to-b': 'linear-gradient(to bottom, #4f46e5, #000000)',
        'bg-gradient-to-l': 'linear-gradient(to left, #4f46e5, #000000)',
        'bg-gradient-to-r': 'linear-gradient(to right, #4f46e5, #000000)',
        'bg-gradient-to-tl': 'linear-gradient(to top left, #4f46e5, #000000)',
        'bg-gradient-to-tr': 'linear-gradient(to top right, #4f46e5, #000000)',
        'bg-gradient-to-bl': 'linear-gradient(to bottom left, #4f46e5, #000000)',
      },
      backgroundImage: {
        'eventTest': "url('../public/mesReservations/eventTest.png')",
      'aiBg': "url('/aiBgtest.jpg')",

      },

      scrollbar: {
        none: {
          '-webkit-scrollbar': 'none',
          scrollbarWidth: 'none',
        },
      },
      colors: {

        primary: '#33DEBD',
        secondary: '#EFFCFA',
        primaryhover: '#4dcbbd',
        primarylightgray: '#fafafa',

        customGris: "#52525B",
        customBlanc: "#FAFAFA",
        customGrisPale: '#E4E4E7',
        customRouge: '#CB162D',
        customVert: '#33DEBD',
        customVertPale: '#EFFCFA',

        customTextNoirPo: '#111111',
        customTextNoir2: '#27272A',
        customTextGrisPale: '#71717A',
        customTextGris2: '#52525B',
        customTextGris3: '#A1A1AA',
        customTextNoir: '#27272A',
        customTextBlue: '#1E40AF',
        customTextBLanc: '#FFFFFF',
        customTextBlanc2: '#F4F4F5',
        customTextRed: '#CB162D',
        customTextRed2: '#FEF2F2',

      },
      width: {
        widthCard: '343px',
        widthModalResetPassword: '545px',
      },
      height: {
        heightCard: '188px',
        heightModalResetPassword: '444px',
      },

    },
  },
  variants: {
    scrollbar: ['responsive'],
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss'),
    require('tailwindcss-gradients'),
  ],
  webpack: (config, options) => {
    config.module.rules.push({
      mode: "development",
      devtool: "inline-source-map",
      entry: {
        main: "./src/index.ts",
      },
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: "app-bundle.js" // <--- Will be compiled to this single file
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader"
          }
        ]
      }
    })


    return config
  },
};
