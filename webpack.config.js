module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.png$/, // регулярное выр. все файлы которые заканчиваются на .png
        use: [{ loader: 'file-loader'}]
      }
    ]
  }
}