/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '30' : '7.5rem',  //120px
        '86' : '23rem',
        '102': '26rem',   // 432px
        '108': '27rem',   // 432px
        '120': '30rem',   // 480px
        '132': '33rem',   // 528px
        '144': '36rem',   // 576px
        '156': '39rem',   // 624px
        '168': '42rem',   // 672px
        '180': '45rem',   // 720px
        
      },
      height: {
        '102': '26rem',   // 432px
        '108': '27rem',   // 432px
        '120': '30rem',   // 480px
        '132': '33rem',   // 528px
        '144': '36rem',   // 576px
        '180': '45rem', // Define your custom height here
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '260': '65rem',
        '280': '70rem',
      },
      width: {
        '102': '26rem',   // 432px
        '108': '27rem',   // 432px
        '120': '30rem',   // 480px
        '132': '33rem',   // 528px
        '144': '36rem',   // 576px
        '162': '38rem',
        '170': '40rem',
        '174': '41rem',
        '178': '43rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '260': '65rem',
        '280': '70rem',
        '300': '300px',
        '320': '320px',
        '340': '340px',
        '360': '90rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}