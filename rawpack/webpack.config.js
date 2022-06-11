var path = require('path');
module.exports = [
    {
        mode: 'production',
        entry: {
            'logan': ['./src/browser.js']
        },
        output: {
            path: path.join(__dirname, 'demo', 'dist'),
            publicPath: './dist/',
            filename: '[name].js',
            chunkFilename: '[name].[chunkhash].js',
        },
        resolve: {
            extensions: ['.js']
        },
        module: {
            rules: []
        }
    }
];
