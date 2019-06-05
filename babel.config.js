module.exports = function babelConfig(api) {
  // avoid  re-execute any plugin and preset functions referenced in that config
  api.cache(true);
  const presets = [
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ];

  return {
    presets,
    plugins,
  };
};
