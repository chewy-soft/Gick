const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
	let config = defaultConfig;
	// config.entry = {
	// 	bundle: [ 'reset-css', path.join(__dirname, '../src/style.css'), 'highlightjs/styles/darcula.css' ]
	// };
	config.module.rules = [
		{
			test: /.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.(js|jsx|mjs)$/,
			include: [ /react-native-vector-icons/ ],
			loader: 'babel-loader'
		},
		{
			test: /.css$/,
			loader: [ 'style-loader', 'css-loader' ]
		},
		{
			test: /.(png|ttf|eot|woff2|woff)$/,
			loader: 'base64-inline-loader?name=[name].[ext]'
		},
		{
			test: /\.ttf$/,
			loader: 'url-loader',
			include: path.resolve(__dirname, '../node_modules/react-native-vector-icons')
		},
		{
			test: /\.worker\.js$/,
			use: [
				{
					loader: 'worker-loader',
					options: {
						inline: true
					}
				},
				{
					loader: 'babel-loader'
				}
			]
		}
	];

	config.resolve.alias = {
		'react-native$': 'react-native-web',
		'@storybook/react-native': '@storybook/react',
		'victory-native': 'victory'
	};

	config.resolve.extensions = [ '.web.js', '.web.jsx', '.js', '.jsx' ];

	return config;
};
