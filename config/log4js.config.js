const path = require('path');

// __dirname は、Node.js において「現在のスクリプトファイルが存在するディレクトリ」の絶対パスを指す。
const LOG_ROOT_DIR =
  process.env.LOG_ROOT_DIR || path.join(process.cwd(), './logs');

module.exports = {
  appenders: {
    ConsoleLogAppender: {
      type: 'console',
    },
    // ログの出力方法を定義
    ApplicationLogAppender: {
      // datefileは日付ごとにログを分割する
      type: 'dateFile',
      filename: path.join(LOG_ROOT_DIR, './application.log'),
      pattern: 'yyyyMMdd',
      // ログ保持の日数
      daysTokeep: 7,
    },
    AccessLogAppender: {
      type: 'dateFile',
      filename: path.join(LOG_ROOT_DIR, './access.log'),
      pattern: 'yyyyMMdd',
      daysTokeep: 7,
    },
  },
  // ログのカテゴリごとに使用するアペンダーとログレベルを定義する
  categories: {
    default: {
      appenders: ['ConsoleLogAppender'],
      // 全てのログを出力する
      level: 'ALL',
    },
    // applicationというカテゴリを選択したときに、以下2つのappendersに出力するという設定
    application: {
      appenders: ['ApplicationLogAppender', 'ConsoleLogAppender'],
      level: 'INFO',
    },
    access: {
      appenders: ['AccessLogAppender', 'ConsoleLogAppender'],
      level: 'INFO',
    },
  },
};
