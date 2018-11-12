if (process.env.NODE_ENV == "storybook") {
  const StorybookUI = require("../storybook/index").default;
  module.exports = StorybookUI;
} else {
  const Root = require("../src/index").default;
  module.exports = Root;
}
