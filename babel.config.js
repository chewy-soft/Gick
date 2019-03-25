module.exports = {
  babelrc: false,
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
          "^victory-native$": "victory"
        }
      }
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/transform-runtime"]
  ]
};
