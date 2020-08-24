/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-08-21 21:11:17
 * @Description  : com.max.xiaoheihe
 */


console.log("脚本载入成功");
Java.perform(function () {
    var charToJstringAddr = Module.findExportByName("libnative-lib.so", "charToJstring");
    console.log(charToJstringAddr);
    if (charToJstringAddr != null) {
        Interceptor.attach(charToJstringAddr, {
            onEnter: function (args) {
                var arg0 = args[0];
                var arg1 = args[1];
                console.log('charToJstring - Enter');
                console.log(Memory.readCString(arg0));
                console.log(Memory.readCString(arg1));
            },
            onLeave: function (retval) {
                // console.log('charToJstring - Leave');
                // console.log(retval.toString());
                console.log('======');
            }
        });
    }

    var strcat = Module.findExportByName("libc.so", "strcat");
    console.log(strcat);
    if (strcat != null) {
        Interceptor.attach(strcat, {
            onEnter: function (args) {
                var arg0 = args[0];
                var arg1 = args[1];
                console.log('strcat - Enter');
                console.log(Memory.readCString(arg0));
                console.log(Memory.readCString(arg1));
            },
            onLeave: function (retval) {
                // console.log('strcat - Leave');
                // console.log(retval.toString());
                console.log('======');
            }
        });
    }
    
    var strcpy = Module.findExportByName("libc.so", "strcpy");
    console.log(strcpy);
    if (strcpy != null) {
        Interceptor.attach(strcpy, {
            onEnter: function (args) {
                var arg0 = args[0];
                var arg1 = args[1];
                console.log('strcpy - Enter');
                console.log(Memory.readCString(arg0));
                console.log(Memory.readCString(arg1));
            },
            onLeave: function (retval) {
                // console.log('strcpy - Leave');
                // console.log(retval.toString());
                console.log('======');
            }
        });
    }


    // var encodeAddr = Module.findExportByName("libnative-lib.so", "encode");
    // console.log(encodeAddr);
    // if (encodeAddr != null) {
    //     Interceptor.attach(encodeAddr, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             var arg2 = args[2];
    //             var arg3 = args[3];
    //             var arg4 = args[4];
    //             console.log('encode - Enter');
    //             console.log( Memory.readCString(arg0));
    //             console.log( Memory.readCString(arg1));
    //             console.log( Memory.readCString(arg2));
    //             console.log( Memory.readCString(arg3));
    //             console.log( Memory.readCString(arg4));
    //         },
    //         onLeave: function (retval) {
    //             console.log('encode - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }


    // var sprintf = Module.findExportByName("libc.so", "sprintf");
    // console.log(sprintf);
    // if (sprintf != null) {
    //     Interceptor.attach(sprintf, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             var arg2 = args[2];
    //             console.log('sprintf - Enter');
    //             console.log( Memory.readCString(arg0));
    //             console.log( Memory.readCString(arg1));
    //             console.log( Memory.readCString(arg2));
    //         },
    //         onLeave: function (retval) {
    //             console.log('sprintf - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }


    // var strlen = Module.findExportByName("libc.so", "strlen");
    // console.log(strlen);
    // if (strlen != null) {
    //     Interceptor.attach(strlen, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             console.log('strlen - Enter');
    //             console.log( Memory.readCString(arg0));
    //         },
    //         onLeave: function (retval) {
    //             console.log('strlen - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }

    // var base64 = Java.use("android.util.Base64");
    // var gzip = Java.use('com.max.xiaoheihe.utils.ca');
    // gzip.a.overload("java.lang.String").implementation = function (p1) {
    //     console.log('gzip-in:')
    //     console.log(p1);
    //     var ps = this.a(p1);
    //     // console.log('gzip-out:', base64.encodeToString(ps,0));
    //     return ps;
    // };
    // var uw = Java.use('com.max.xiaoheihe.utils.W');
    // uw.d.overload("int").implementation = function (p1) {
    //     console.log('genkey-in:', p1);
    //     var ps = this.d(p1);
    //     // ps='a12ds12b'
    //     console.log('genkey-out:', ps);
    //     return (ps);
    // }
    // uw.b.overload("java.lang.String").implementation = function (p1) {
    //     console.log('md5-in:', p1);
    //     var ps = this.b(p1);
    //     // ps='a12ds12b'
    //     console.log('md5-out:', ps);
    //     return (ps);
    // }

    // var ru = Java.use('com.max.xiaoheihe.utils.ta');
    // ru.a.overload("java.lang.String").implementation = function (p1) {
    //     console.log('rsa-in:', p1);
    //     var ps = this.a(p1);
    //     // console.log('rsa-out:', base64.encodeToString(ps,0));
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
    //             console.log( Memory.readCString(arg0));
    //             console.log( Memory.readCString(arg1));
    //         },
    //         onLeave: function (retval) {
    //             console.log('MDString - Leave');
    //             console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }
});