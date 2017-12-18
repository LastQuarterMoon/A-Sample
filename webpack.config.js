module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/js/main.js",//已多次提及的唯一入口文件
  output: {
  	publicPath: "http://localhost:8080/src/js",
    path: __dirname + "/src/js/",//打包后的文件存放的地方
    filename: "common.js"//打包后输出文件的文件名
  }
}
