var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: 'development'
}