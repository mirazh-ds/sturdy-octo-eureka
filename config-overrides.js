// filepath: /c:/Users/james/Desktop/HTML/sturdy-octo-eureka/config-overrides.js
module.exports = function override(config, env) {
  // Add custom configuration
  config.module.rules.push({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /node_modules\/plotly.js/
  });

  return config;
};