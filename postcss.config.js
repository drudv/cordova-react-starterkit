module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      url: (asset, dir, options) => {
        // temporary workaround to load onsenui assets
        if (asset.absolutePath.indexOf('node_modules/onsenui/')) {
          return asset.absolutePath;
        }
        return asset.url;
      },
    },
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
