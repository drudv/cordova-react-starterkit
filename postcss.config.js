module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      url: (asset, dir, options) => {
        // temporary workaround to load onsenui assets
        const pattern = 'node_modules/onsenui/';
        const index = asset.absolutePath.indexOf(pattern);
        if (index !== -1) {
          return '~onsenui/' + asset.absolutePath.substr(index + pattern.length);
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
