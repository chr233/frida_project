/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-11-21 20:10:24
 * @Description  : com.max.xiaoheihe
 */


console.log("脚本载入成功");
Java.perform(function () {

    var temp;

    var baseAddr = Module.findBaseAddress('libnative-lib.so');
    var funcAddr = baseAddr.add(0x1df0 + 1);
    // console.log(baseAddr, funcAddr);
    Interceptor.attach(funcAddr, {
        onEnter(args) {
            var arg0 = args[0];
            var arg1 = args[1];
            var arg2 = args[2];
            var arg3 = args[3];
            var arg4 = args[4];
            temp = arg2;
            console.log('Enter');            
            console.log(Memory.readCString(arg0));
            console.log(Memory.readCString(arg1));
            console.log(Memory.readCString(arg2));
            console.log(arg3);
            console.log(arg4);
            
            console.log(hexdump(temp));
            // console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') );
            // console.log(Memory.readCString(arg2));
            // console.log(Memory.readCString(arg3));
            // console.log(Memory.readCString(arg4));
        },
        onLeave(retval) {
            console.log('Leave');
            console.log(retval.toString());
            console.log(hexdump(temp));
            console.log(Memory.readCString(temp));
            console.log('======');
        }
    });



    // var baseAddr = Module.findBaseAddress('libnative-lib.so');
    // var funcAddr = baseAddr.add(0x3b50 + 1);
    // console.log(baseAddr, funcAddr);
    // Interceptor.attach(funcAddr, {
    //     onEnter(args) {

    //         var arg0 = args[0];
    //         var arg1 = args[1];
    //         var arg2 = args[2];
    //         // var arg3 = args[3];
    //         // var arg4 = args[4];
    //         console.log('0x3b50 - Enter');
    //         console.log(Memory.readCString(arg0));
    //         console.log(Memory.readCString(arg1));
    //         console.log(Memory.readCString(arg2));
    //         // console.log(Memory.readCString(arg3));
    //         // console.log(Memory.readCString(arg4));
    //     },
    //     onLeave(retval) {
    //         console.log('0x3b50 - Leave');
    //         console.log(retval.toString());
    //         console.log('======');
    //     }
    // });

    // var funcAddr2 = baseAddr.add(0x0b14 + 1);
    // console.log(baseAddr, funcAddr2);
    // Interceptor.attach(funcAddr2, {
    //     onEnter(args) {
    //         var arg0 = args[0];
    //         var arg1 = args[1];
    //         // var arg2 = args[2];
    //         // var arg3 = args[3];
    //         // var arg4 = args[4];
    //         console.log('0x0b14 - Enter');
    //         console.log(Memory.readCString(arg0));
    //         console.log(Memory.readCString(arg1));
    //         // console.log(Memory.readCString(arg2));
    //         // console.log(Memory.readCString(arg3));
    //         // console.log(Memory.readCString(arg4));
    //     },
    //     onLeave(retval) {
    //         console.log('0x0b14 - Leave');
    //         console.log(retval.toString());
    //         console.log('======');
    //     }
    // });


    // var env = Java.vm.getEnv();
    // var handlePointer = Memory.readPointer(env.handle);
    // console.log("env handle: " + handlePointer);
    // var GetStringUTFCharsPtr = Memory.readPointer(handlePointer.add(0x2A4));
    // console.log("GetStringUTFCharsPtr addr: " + GetStringUTFCharsPtr);
    // Interceptor.attach(GetStringUTFCharsPtr, {
    //     onEnter (args) {
    //         var str = "";
    //         Java.perform(function () {
    //             str = Java.cast(args[1], Java.use('java.lang.String'));
    //         });
    //         console.log("GetStringUTFChars: " + str);
    //         if (str.indexOf("linkData:") > -1) {    // 设置过滤条件
    //             console.log("========== found linkData LR: " + this.context.lr + "  ==========");
    //         }
    //     }
    // });

    // var strcat = Module.findExportByName("libc.so", "strcat");
    // console.log(strcat);
    // if (strcat != null) {
    //     Interceptor.attach(strcat, {
    //         onEnter (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('strcat - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //         },
    //         onLeave (retval) {
    //             // console.log('strcat - Leave');
    //             // console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }

    // var strcpy = Module.findExportByName("libc.so", "strcpy");
    // console.log(strcpy);
    // if (strcpy != null) {
    //     Interceptor.attach(strcpy, {
    //         onEnter (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('strcpy - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //         },
    //         onLeave (retval) {
    //             // console.log('strcpy - Leave');
    //             // console.log(retval.toString());
    //             console.log('======');
    //         }
    //     });
    // }


    // var encodeAddr = Module.findExportByName("libnative-lib.so", "encode");
    // console.log(encodeAddr);
    // if (encodeAddr != null) {
    //     Interceptor.attach(encodeAddr, {
    //         onEnter (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             var arg2 = args[2];
    //             var arg3 = args[3];
    //             var arg4 = args[4];
    //             console.log('encode - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //             console.log(Memory.readCString(arg2));
    //             console.log(Memory.readCString(arg3));
    //             console.log(Memory.readCString(arg4));
    //         },
    //         onLeave (retval) {
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
    //         onEnter (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             var arg2 = args[2];
    //             console.log('sprintf - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //             console.log(Memory.readCString(arg2));
    //         },
    //         onLeave (retval) {
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
    //         onEnter (args) {
    //             var arg0 = args[0];
    //             console.log('strlen - Enter');
    //             console.log(Memory.readCString(arg0));
    //         },
    //         onLeave (retval) {
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
});