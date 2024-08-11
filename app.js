const PORT = process.env.PORT;
const path = require('path');
const logger = require('./lib/log/logger.js');
const accessloger = require('./lib/log/accesslogger.js');
const applicationlogger = require('./lib/log/applicationlogger.js');
const express = require('express');
const favicon = require('serve-favicon');
const app = express();

/* 
  app.getは、ExpressアプリケーションにおけるHTTP GETリクエストを処理するためのメソッド
  res.endは、Node.jsのHTTPレスポンスオブジェクトのメソッドで、レスポンスの終了を示す。
  res.endを呼び出すと、サーバーはクライアントにレスポンスデータを送信し、レスポンスを終了。
  app.setでejs拡張子をもつテンプレエンジンと使用することを認識させる
  x-powerd-byをdisabledで非表示にする（サーバー情報）
*/

// app.get('/', (req, res) => {
//   res.end('hello World');
// });

app.set('view engine', 'ejs');
app.disable('x-powered-by');

// 静的コンテンツの配信
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '/public')));

// access log
app.use(accessloger());

// 動的コンテンツ配信
app.use('/', require('./routes/index.js'));

// application log
app.use(applicationlogger());

app.listen(PORT, () => {
  logger.application.info(`Application listening at ${PORT}`);
});
