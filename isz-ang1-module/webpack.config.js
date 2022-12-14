const extendWebpack = require('piral-ng/extend-webpack');

module.exports = (config) => {
  config.entry["angular-page"] = './src/angular-page.tsx';
  return extendWebpack({
    ngOptions: {
      jitMode: true,
    },
  })(config);
};
