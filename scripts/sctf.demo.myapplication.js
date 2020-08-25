/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-08-25 03:13:12
 * @Description  : sctf.demo.myapplication
 */


console.log("脚本载入成功");
Java.perform(function () {
    var f = Java.use('sctf.demo.myapplication.f');
    f.encode.overload("java.lang.String", "java.lang.String").implementation = function (p1, p2) {
        console.log('encode-in:')
        console.log(p1);
        console.log(p2);
        // var ps = this.encode(p1, p2);
        var ps='~8t808_8A8n848r808i8d8-8w808r8l8d8}8';
        console.log('encode-out:');
        console.log(ps);
        return ps;
    };
    f.sctf.overload("java.lang.String").implementation = function (p1) {
        console.log('sctf-in:');
        console.log(p1);
        // var ps = this.sctf(p1);
        var ps = 'c2N0ZntXM2xjMG1l';
        console.log('sctf-out:');
        console.log(ps);
        return (ps);
    }
});