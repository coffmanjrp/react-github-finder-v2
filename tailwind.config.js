module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {},
  },
  safelist: [/data-theme$/],
  theme: { extend: {} },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
};
