module.exports = function (api) {
  // avoid  re-execute any plugin and preset functions referenced in that config
  api.cache(true);
  const presets = [
    "@babel/preset-react"
  ];

  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]

  return {
    presets,
    plugins
  }
}