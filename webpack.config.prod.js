var path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.min.js',
    },
    resolve: {
        alias: {
            rx: 'rx/dist/rx.lite.js',
        },
        root: path.resolve(__dirname),
    },
};
