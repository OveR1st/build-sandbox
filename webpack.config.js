const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",

  module: {
    rules: [
      // Loading Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // когда 1 лоадер можно без [] use
      },
      // Loading images
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      // Loading CSS
      {
        test: /\.(css)$/,
        use: [ 'style-loader', 'css-loader' ] // без вложеных {} с loader key 
      },
       // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]// идет к обработка и передает выше по цепи
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}