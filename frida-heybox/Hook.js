/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-07-16 22:40:20
 * @Description  : 
 */
console.log("脚本载入成功");

Java.perform(function() {
    // var nativePointer = Module.findExportByName("libnative-lib.so", "encode");
    // console.log("native: " + nativePointer);
    // Interceptor.attach(nativePointer, {
    //     onEnter: function(args) {
    //         console.log("encode", args[0], ",", args[1], ",", args[2], ",", args[3], ",", args[4]);
    //     },
    //     onLeave: function(retval) {
    //         console.log(retval);
    //     }
    // });



    var cls = Java.use('com.max.xiaoheihe.utils.W');
    cls.b.overload("java.lang.String").implementation = function(p1) {
        console.log('md5-in:', p1);
        var p2 = this.b(p1);
        console.log('md5-out:', p2);
        return p2;
    }

    // var cls2 = Java.use('com.max.xiaoheihe.utils.Qb');
    // cls2.a.overload("java.lang.String").implementation = function(p1) {
    //     console.log('a-in:', p1);
    //     var p2 = this.a(p1);
    //     console.log('a-out:', p2);
    //     return p2;
    // }

    var cls3 = Java.use('com.max.xiaoheihe.app.HeyBoxApplication');
    cls3.f.overload().implementation = function() {
        var p1 = this.f();
        console.log('f-out:', p1);
        return p1;
    }
});