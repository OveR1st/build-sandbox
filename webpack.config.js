const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env = {}) => {
 

  const isProd = env.production === true;
  const isDev = env.NODE_ENV === 'local';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title : 'Hello World',
        buildTime: new Date().toString(),
        template: 'public/index.html'
      })
    ];

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css' // хеш - измение при каждой сборке 
      })
      )
    };

    return plugins; 
  };

  return {
    mode: isProd ? 'production' : isDev && 'local',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

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
          use: getStyleLoaders() // без вложеных {} с loader key 
        },
          // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [ ...getStyleLoaders(), 'sass-loader' ]// идет к обработка и передает выше по цепи
        }
      ]
    },
  
    plugins: getPlugins(),

    devServer: {
      open: true // открытие браузера после старта сервера
    }
  }
}

// MiniCssExtractPlugin.loader - для продакшн, а обычные лоадеры для dev