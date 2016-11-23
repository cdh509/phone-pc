require.config({
    baseUrl:'js',
    paths:{
        // 插件
        "template":"libs/template-native",
        "zepto":"libs/zepto.min",
        "jquery":"libs/jquery",
        // 公共
        "common":"common/common",
        "Public":"common/Public",
        // 私有
        "categories":"categories",
    }
});
require(['require', 'jquery', 'zepto'],function(){
    console.log('ok1');
    var localName     = location.pathname;
    var localArrName  = localName.split('/');
    var localStrName  = localArrName[localArrName.length - 1];
    var thisName      = localStrName.replace('.html', '');

    require([thisName], function(){
        console.log('ok---  ' + thisName);
    });
});