const base = require("../../babel.config");

module.exports = function(api) {
  const baseConfig = base(api);

  return {
    ...baseConfig
  };
};
