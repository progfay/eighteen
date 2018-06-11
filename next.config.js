const withManifest = require('next-manifest')
const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin')

module.exports = withManifest({
  webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
    if (!isServer && !dev) {
      config.plugins.push(new NextWorkboxWebpackPlugin({
        distDir,
        buildId
      }))
    }
    config.node = {
      fs: 'empty'
    }
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  },
  manifest: {
    'name': 'eighteen',
    'short_name': '18',
    'description': "It's Rock-Scissors-Paper, but each player can play only 18 fingers in total can be used.",
    'start_url': '/',
    'display': 'standalone',
    'orientation': 'any',
    'background_color': '#FFF',
    'theme_color': '#FFF',
    'icons': {
      src: './icon/icon.png',
      cache: true
    }
  }
})
