var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname + "/",
    entry: {
        'page.main': './pages/main/page.main.jsx',
    },
    output: {
        path: './',
        // Make sure to use [name] or [id] in output.filename
        // when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"development"' }
        })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /\/node_modules\// },
            { test: /\.jsx$/, loaders: ['jsx?harmony'], exclude: /\/node_modules\// }
        ]
    }
};
