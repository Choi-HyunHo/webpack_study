// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js', // 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  output: { // 웹팩을 돌리고 난 결과물의 파일 경로를 의미 합니다.
    filename: '[name] main.js', // 웹팩으로 빌드한 파일의 이름을 의미
    // path: path.resolve(__dirname, 'dist') // 해당 파일의 경로 , path.resolve() 코드는 인자로 넘어온 경로들을 조합해서 유효한 파일 경로를 만들어주는 Node.js API
  }
};

// Loader : 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 
// 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성

// npm i css-loader -D
// module.exports = {
//     entry: './app.js',
//     output: {
//       filename: 'bundle.js'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/, <- 로더를 적용할 파일 유형(일반적으로 정규 표현식 사용)
//           use: ['css-loader'] <- 해당 파일에 적용할 로더의 이름
//         }
//       ]
//     }
//   }

// 플러그인(Plugin) : 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성 ( 해당 결과물의 형태를 바꾸는 역할 )
// webpack.config.js
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin(), // 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
//     new webpack.ProgressPlugin() //  웹팩의 빌드 진행율을 표시해주는 플러그인
//   ]
// }