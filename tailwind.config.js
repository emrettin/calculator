module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         calcBg: '#303A49',
         calcBottomBg: '#808BF7',
         calcButtonHoverBg: '#777FF5',
         calcRightButtonBg: '#5B5AE6',
         calcRightButtonHoverBg: '#686BEF',
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
}