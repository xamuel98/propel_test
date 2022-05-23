module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        textGrey: "#788787",
        titleBlack: "#060314",
        bodyBlack: "#576479",
        primary: "#090909",
        // secondary: "#64D068",
      },
    },
  },
  plugins: [],
}
