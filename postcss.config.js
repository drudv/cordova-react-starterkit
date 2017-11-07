module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': { url: 'rebase' },
    'postcss-cssnext': {
      browsers: [ // enable CSS properties which require prefixes
        '> 1%', 'Firefox ESR', 'Opera 12.1',
        'Android >= 4.4',
        'iOS >= 8.0',
        'Chrome >= 30', // equivalent to Android 4.4 WebView
        'Safari >= 9',
      ],
    },
  },
};
