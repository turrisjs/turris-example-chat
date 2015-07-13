var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.min.js',
    },
    resolve: {
        alias: {
            rx: 'rx/dist/rx.lite.js',
        },
        root: path.resolve(__dirname),
    },
};
