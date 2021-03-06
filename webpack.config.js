'use strict';

const path = require('path');

module.exports = {
    entry: {
      index:  "./src/index.js",
      search:"./src/search.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module:{
        rules:[
          {
            test: /\.js$/, 
            use: 'babel-loader' // 解析ES6
         },
         {
           test:/\.css$/,
           use:[
            'style-loader',
            'css-loader',
           ]
         },
         {
          test:/\.less$/,
          use:[
           'style-loader',
           'css-loader',
           'less-loader',
          ]
        },
        {
          test:/.(png|jpg|jpeg)$/,
          use:'file-loader'
        }
        ]
    }
};