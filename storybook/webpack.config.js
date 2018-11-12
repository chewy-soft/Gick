const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  let config = defaultConfig;

  config.module.rules = [
    {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        babelrc: false,
        presets: ["react-native"]
      }
    },
    {
      test: /\.(js|jsx|mjs)$/,
      include: [/react-native-vector-icons/],
      loader: "babel-loader",
      options: {
        babelrc: false,
        presets: ["react-native"]
      }
    },
    {
      test: /.css$/,
      loader: ["style-loader", "css-loader"]
    },
    {
      test: /.(png|ttf|eot|woff2|woff)$/,
      loader: "base64-inline-loader?name=[name].[ext]"
    },
    {
      test: /\.ttf$/,
      loader: "url-loader",
      include: path.resolve(
        __dirname,
        "../node_modules/react-native-vector-icons"
      )
    }
  ];

  config.resolve.alias = {
    "react-native$": "react-native-web",
    "@storybook/react-native": "@storybook/react",
    "victory-native": "victory"
  };

  config.resolve.extensions = [".web.js", ".web.jsx", ".js", ".jsx"];

  return config;
};
