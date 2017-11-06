module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      url: (asset, dir, options) => {
        // temporary workaround to load onsenui/css-components-src resources
        const indexOfOnsenCSSComponents = asset.absolutePath.indexOf('onsenui/css-components-src');
        if (indexOfOnsenCSSComponents !== -1) {
          return '~' + asset.absolutePath.substr(indexOfOnsenCSSComponents);
        }
        return asset;
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
