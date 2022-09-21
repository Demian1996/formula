module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['ie >= 11', 'android >= 5'],
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': { 'version': 3, 'proposals': true },
        'useESModules': true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};