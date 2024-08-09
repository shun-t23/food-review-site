const router = require('express').Router();

/* 
renderはejsのパスを返す
expressはviewsディレクトリをテンプレ格納場所として使用する。viewsのフォルダ指定は不要
*/

router.get('/', (req, res) => {
  res.render('./index.ejs');
});

module.exports = router;
