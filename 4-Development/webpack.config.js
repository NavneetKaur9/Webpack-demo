const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // Change your config file to tell the dev server where to look for files:
        contentBase: './dist',
        port: 9000,
        //Provides the ability to execute custom middleware after all other middleware internally within the server.
        after: function(app, server) {
            // do fancy stuff
        },
        //Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers
        before: function(app, server) {
            app.get('/some/path', function(req, res) {
                res.json({ custom: 'response' });
            });
        },
        //This option allows you to whitelist services that are allowed to access the dev server
        allowedHosts: ['host.com', 'subdomain.host.com', 'subdomain2.host.com', 'host2.com']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
