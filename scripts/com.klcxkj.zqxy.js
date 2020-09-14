/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-09-03 23:07:59
 * @Description  : com.klcxkj.zqxy
 */


console.log("脚本载入成功");
Java.perform(function () {
    //破解代理检测
    var u = Java.use('d.k.c.n.u');

    u.b.implementation = function (p1) {
        console.log('proxy_detect-in:');
        console.log(p1);
        // var ps = this.b(p1);
        var ps = false;
        console.log('proxy_detect-out:');
        console.log(ps);
        return (ps);
    }
});