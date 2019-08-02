require.config({
  paths:{
    "jquery":'../lib/jquery.min'
  }
});
require(['jquery'],function($){
  // ...
  //通过此方式引入jquery才能使用$，接下来正常写jquery代码就好
});