/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-08-08 12:34:33
 * @Description  : com.max.xiaoheihe
 */


console.log("脚本载入成功");
Java.perform(function () {
    // var charToJstringAddr = Module.findExportByName("libnative-lib.so", "charToJstring");
    // console.log(charToJstringAddr);
    // if (charToJstringAddr != null) {
    //     Interceptor.attach(charToJstringAddr, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('charToJstring - Enter');
    //             console.log(arg0, Memory.readCString(arg0));
    //             console.log(arg1, Memory.readCString(arg1));
    //         },
    //         onLeave: function (retval) {
    //             //retval函数返回值
    //             console.log('charToJstring - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }
    var base64 = Java.use("android.util.Base64");
    var gzip = Java.use('com.max.xiaoheihe.utils.ca');
    gzip.a.overload("java.lang.String").implementation = function (p1) {
        console.log('gzip-in:')
        console.log( p1);
        var ps = this.a(p1);
        // console.log('gzip-out:', base64.encodeToString(ps,0));
        return ps;
    };
    var uw = Java.use('com.max.xiaoheihe.utils.W');
    uw.d.overload("int").implementation = function (p1) {
        console.log('genkey-in:', p1);
        var ps = this.d(p1);
        ps='a12ds12b'
        console.log('genkey-out:', ps);
        return (ps);
    }
    // var uw = Java.use('com.max.xiaoheihe.utils.W');
    // uw.d.overload("int").implementation = function (p1) {
    //     console.log('genkey-in:', p1);
    //     if (p1 == 8) {
    //         var ps = "aaaaaaaa";
    //     } else {
    //         var ps = this.d(p1);
    //     }
    //     console.log('genkey-out:', ps);
    //     return (ps);
    // }
    // var MDStringAddr = Module.findExportByName("libnative-lib.so", "MDString");
    // console.log(MDStringAddr);
    // if (MDStringAddr != null) {
    //     Interceptor.attach(MDStringAddr, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('MDString - Enter');
    //             console.log(arg0, Memory.readCString(arg0));
    //             console.log(arg1, Memory.readCString(arg1));
    //         },
    //         onLeave: function (retval) {
    //             console.log('MDString - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }
});


// console.log("脚本载入成功");
// Java.perform(function () {
//     var JavaString = Java.use("java.lang.String");


    // var encodeAddr = Module.findExportByName("libnative-lib.so", "getrsakey");
    // console.log(encodeAddr);
    // if (encodeAddr != null) {
    //     Interceptor.attach(encodeAddr, {
    //         onEnter: function (args) {
    //             //args参数数组
    //             console.log('Enter')
    //             console.log(args[0], Memory.readCString(args[0]));
    //             console.log(args[1], Memory.readCString(args[1]));
    //             console.log(args[2], Memory.readCString(args[2]));
    //             console.log(args[3], Memory.readCString(args[3]));
    //             console.log(args[4], Memory.readCString(args[4]));
    //         },
    //         onLeave: function (retval) {
    //             //retval函数返回值
    //             console.log('Leave');
    //             console.log(retval.toString());
    //             console.log(Memory.readCString(retval));
    //             console.log('======');
    //             // retval.replace(0)  
    //         }
    //     });
    // }
// });

