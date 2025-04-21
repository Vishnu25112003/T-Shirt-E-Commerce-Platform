module.exports = {
    theme: {
      extend: {
        animation: {
          wiggle: 'wiggle 3s ease-in-out infinite',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-1deg) translateY(-2px)' },
            '50%': { transform: 'rotate(1deg) translateY(2px)' },
          },
        },
      },
    },
    plugins: [],
  };
  