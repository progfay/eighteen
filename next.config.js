const withManifest = require('next-manifest')

module.exports = withManifest({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  },
  manifest: {
    "name"              : "eighteen",
    "short_name"        : "18",
    "description"       : "It's Rock-Scissors-Paper, but each player can play only 18 fingers in total can be used.",
    "start_url"         : "/",
    "display"           : "standalone",
    "orientation"       : "any",
    "background_color"  : "#FFF",
    "theme_color"       : "#FFF",
    "icons": {
      src: './icon/icon.png',
      cache: true
    }
  }
})
