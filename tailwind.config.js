/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '10px',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    screens: {
      sm:'480px',
      md:'650px',
      xl:'965px',
      lg:'1200px',
    },
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      fontFamily :{
        sans: ['Poppins', 'sans-serif'],
      },
      letterSpacing:{
        widest:'.3em'
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
}


