/*
 * @Author       : Chr_
 * @Date         : 2020-09-12 19:35:23
 * @LastEditors  : Chr_
 * @LastEditTime : 2021-11-18 23:50:14
 * @Description  : 
 */

console.log("脚本载入成功");

Java.perform(function () {
    rpc.exports = {
        encode(urlpath, timestamp, nonce) {
            if (!urlpath.toString().endsWith('/')) {
                urlpath += '/';
            }
            var currentApp = Java.use('android.app.ActivityThread').currentApplication();
            var context = currentApp.getApplicationContext();
            var NDKTools = Java.use('com.max.xiaoheihe.utils.NDKTools');
            var hkey = NDKTools.encode(context, urlpath, timestamp, nonce);
            return hkey;
        },
    };
});