const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');  

// 'production' か 'development' を指定
const MODE = "development";

const { VueLoaderPlugin } = require("vue-loader");

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = [
  {
    mode: "development",
    entry: {
      'asset/js/main': "./resource/js/main.js",  
      //headerapp: "./resource_asset/js/header.js",
    },
    output: {
      path: path.resolve(__dirname, 'public/'),
      filename : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)/,
          use: ["vue-style-loader", "style-loader","css-loader","sass-loader"]
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.(js)$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                //presets: ["@babel/preset-env"]
                //presets: ['@babel/preset-es2017']
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      // サポートするブラウザ、この設定に応じて、必要な polyfill のみが import される
                      targets: {
                        edge: "14"
                      },
                      // 必要な polyfill のみを import させたい場合、'usage'を指定する（必須）
                      //useBuiltIns: "usage",
                      useBuiltIns: "entry"
                      // core-js のバージョンを指定する（指定しないとバージョン2が利用され警告が出力される）
                      // corejs: 3,
                      // Stage 4 未満のプロポーザルの polyfill も import される
                      //corejs: { version: 3},
                      //corejs: { version: 3, proposals: true },
                      // trueにすると利用しているポリフィルなどの情報が出力される
                      // polyfill が import されているかどうかを確認するためのものなので必須ではない
                      //debug: true
                    }
                  ]
                ]
              }
            }
          ]
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      // Webpackで利用するときの設定
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
      // Vueを読み込めるようにするため
      new VueLoaderPlugin()
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: "all"
        })
      ]
    }
  },
  {
    mode: "development",
    entry: {
      main: "./resource/scss/main.scss"
    },
    output: {
      path: path.resolve(__dirname, "public/asset/css")
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                // オプションでCSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // ソースマップを有効にする
                sourceMap: enabledSourceMap
              }
            },
            "clean-css-loader",

            {
              loader: "postcss-loader",
              options: {
                //sourceMap:true,
                plugins: [
                  require("autoprefixer") /*({
                    overrideBrowserslist: ["last 2 versions", "ie >= 11", "Android >= 4"]
                    cascade:false
                    grid:true
                  }) */
                ]
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      require("autoprefixer"),

      //new webpack.ProgressPlugin(),
      new webpack.ProgressPlugin({
        entries: true,
        modules: true,
        modulesCount: 100,
        profile: true,
        handler: (percentage, message, ...args) => {
          // custom logic
        }
      }),
      new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
  }
];
