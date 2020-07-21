/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-07-17 15:09:11
 * @Description  : 
 */
console.log("脚本载入成功");

Java.perform(function() {
    function print_dump(addr, size) {
        var buf = Memory.readByteArray(addr, size)
        console.log("[function] send[*] " + addr.toString() + "  " + "length: " + size.toString() + "\n[data]")
        console.log(hexdump(buf, {
            offset: 0,
            length: size,
            header: false,
            ansi: false
        }));
        console.log("")
    }

    // var nativePointer = Module.findExportByName("libnative-lib.so", "encode");
    // console.log("native: " + nativePointer);
    // Interceptor.attach(nativePointer, {
    //     onEnter: function(args) {
    //         console.log("encode")
    //         print_dump(args[0], 255)
    //         console.log(argv[0].f())

    //         // console.log(Memory.readByteArray(args[4], 255))
    //         // console.log(args[4].toInt32())
    //         // console.log(ptr1)
    //         // , ",", args[1], ",", args[2], ",", args[3], ",", args[4]);
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

    // var cls3 = Java.use('com.max.xiaoheihe.app.HeyBoxApplication');
    // cls3.f.overload().implementation = function() {
    //     var p1 = this.f();
    //     console.log('f-out:', p1);
    //     return p1;
    // }


    // var cls5 = Java.use('com.max.xiaoheihe.app.HeyBoxApplication');
    // cls5.f.overload().implementation = function() {
    //     var p1 = this.f();
    //     console.log('f-out:', p1);
    //     return p1;
    // }
});