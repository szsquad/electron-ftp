module.exports = function (api) {
  // avoid  re-execute any plugin and preset functions referenced in that config
  api.cache(true);
  const presets = [
    "@babel/preset-react"
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ]

  return {
    presets,
    plugins
  }
}