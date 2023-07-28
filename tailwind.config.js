/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'bg-top': "url('images/bg-pattern-top-desktop.svg')",
          'bg-bottom': "url('images/bg-pattern-bottom-desktop.svg')",
        }
      }
    }
  }