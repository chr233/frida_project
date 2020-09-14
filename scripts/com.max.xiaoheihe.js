/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-09-10 10:15:19
 * @Description  : com.max.xiaoheihe
 */


console.log("脚本载入成功");
Java.perform(function () {


    function hook_ssl_verify_result(address) {

        Interceptor.attach(address, {

            onEnter: function (args) {

                send("Disabling SSL validation")

            },

            onLeave: function (retval) {

                send("Retval: " + retval)

                retval.replace(0x1);



            }

        });

    }


    var m = Process.findModuleByName('libnative-lib.so');
    var pattern = 'F0 B5 03 AF 2D E9 00 0B 94 46 2E 4A'
    // var pattern = "2d e9 f0 4f a3 b0 81 46 50 20 10 70"

    var res = Memory.scan(m.base, m.size, pattern, {

        onMatch: function (address, size) {

            console.log('sub_1ca0: ' + address.toString());

            Interceptor.attach(address.add(0x01), {
                onEnter: function (args) {
                    var arg0 = args[0];
                    var arg1 = args[1];
                    console.log('sub1ca0 - Enter');
                    console.log(Memory.readCString(arg0));
                    console.log(Memory.readCString(arg1));
                },
                onLeave: function (retval) {
                    console.log('sub1ca0 - Leave');
                    console.log(retval.toString());
                    console.log('======');
                }
            });

        },

        onError: function (reason) {

            console.log('There was an error scanning memory', reason);

        },

        onComplete: function () {

            console.log("All done")

        }

    });






    // var baseAddr = Module.findBaseAddress('libnative-lib.so');
    // var funcAddr = baseAddr.add(0x1ca0);
    // console.log(baseAddr, funcAddr);
    // Interceptor.attach(funcAddr, {
    //     onEnter: function (args) {

    //         var arg0 = args[0];
    //         var arg1 = args[1];
    //         console.log('sub1ca0 - Enter');
    //         console.log(Memory.readCString(arg0));
    //         console.log(Memory.readCString(arg1));
    //     },
    //     onLeave: function (retval) {
    //         console.log('sub1ca0 - Leave');
    //         console.log(retval.toString());
    //         console.log('======');
    //     }
    // });

    // var strcat = Module.findExportByName("libc.so", "strcat");
    // console.log(strcat);
    // if (strcat != null) {
    //     Interceptor.attach(strcat, {
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('strcat - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //         },
    //         onLeave: function (retval) {
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
    //         onEnter: function (args) {
    //             var arg0 = args[0];
    //             var arg1 = args[1];
    //             console.log('strcpy - Enter');
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //         },
    //         onLeave: function (retval) {
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
    //             console.log(Memory.readCString(arg0));
    //             console.log(Memory.readCString(arg1));
    //             console.log(Memory.readCString(arg2));
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
});