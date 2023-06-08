const webpack = require('webpack');
module.exports = {
    entry: "./lib/connect/index.js",
    //mode: "development",
    output: {
        library:  {
            type: "commonjs2"
        },
        filename: "mqtt.browser.js"
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: [ 'buffer', 'Buffer' ],
        }),
    ],
    resolve: {
        fallback: {
            buffer: require.resolve('buffer'),

            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            stream: require.resolve('stream-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util'),

        }
    }
}