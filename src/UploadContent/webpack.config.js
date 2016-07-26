module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/assets',
        exclude: /bundle\.js$/
      }
    ],
        loaders: [
            { test: /\.css$/, loader: "style!css" , exclude: /node_modules/ },
      		{
			        test: /\.scss$/,
			        loaders: ["style", "css", "sass"]
      		},
           {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['babel-loader']
      },
      {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loaders: ['babel-loader']
          }
        ]
    }
};