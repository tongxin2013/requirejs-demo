require.config({
  baseUrl: 'js/', // 配置基础路径
  paths: { // 加载路径(引入后面不用加.js)
    "jquery": "lib/jquery.min",
    "index": "script/index"
  }
});
require(['jquery'], function ($) {
  //通过此方式引入jquery才能使用$，接下来正常写jquery代码就好
  console.log('$ is ready');
  require(['index'], function (index) {
    index.indexAlert();
    index.indexLog();
    $('button').click(function () {
      index.buttonClick();
    })
  });
});