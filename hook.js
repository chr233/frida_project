/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-08-04 16:22:42
 * @Description  : com.max.xiaoheihe
 */


// console.log("========Hook Start==========")

// String.prototype.format = function () {
//     var values = arguments;
//     return this.replace(/\{(\d+)\}/g, function (match, index) {
//         if (values.length > index) {
//             return values[index];
//         } else {
//             return "";
//         }
//     });
// }
// var JNI_LOAD_POINTER = Module.getExportByName('libnative-lib.so', 'JNI_OnLoad'); // 首先拿到 JNI_OnLoad方法的地址
// var BASE_ADDR = parseInt(JNI_LOAD_POINTER) - parseInt('0x1C6C'); // 用程序运行中JNI_OnLoad的绝对地址减去它的相对地址得到基址
// // MDString
// Java.perform(function () {
//     var hookpointer = '0x' + parseInt(BASE_ADDR + parseInt('0x1968')).toString(16) // 获取要hook方法的地址
//     var pointer = new NativePointer(hookpointer) // 根据方法地址构建NativePointer
//     console.log('[MDString] hook pointer: ', pointer)
//     var arg0, arg1, arg2, arg3
//     Interceptor.attach(pointer, {
//         onEnter: function (args) {
//             arg0 = args[0]
//             arg1 = args[1]
//             arg2 = args[2]
//             console.log('\n')
//             console.log('=====> [MDString] -> [方法调用前]')
//             console.log('参数1: {0} => {1}'.format(arg0, Memory.readCString(arg0)))
//             console.log('参数2: {0} => {1}'.format(arg1, Memory.readCString(arg1)))
//             console.log('参数3: {0} => {1}'.format(arg2, Memory.readCString(arg2)))
//             console.log('\n')
//         },
//         onLeave: function (retval) {
//             console.log('\n')
//             console.log('=====> [MDString] -> [方法调用后]:')
//             console.log('返回值: ', retval)
//             // console.log('参数1: {0} => {1}'.format(arg0, Memory.readCString(arg0)))
//             // console.log('参数2: {0} => {1}'.format(arg1, Memory.readCString(arg1)))
//             // console.log('参数3: {0} => {1}'.format(arg2, Memory.readCString(arg2)))
//             console.log('\n')
//         }
//     }
//     )
//     var encodeAddr = Module.findExportByName("libnative-lib.so", "getrsakey");
//     console.log(encodeAddr);
//     if (encodeAddr != null) {
//         Interceptor.attach(encodeAddr, {
//             onEnter: function (args) {
//                 //args参数数组
//                 console.log('Enter')
//                 console.log(args[0], Memory.readCString(args[0]));
//                 console.log(args[1], Memory.readCString(args[1]));
//                 console.log(args[2], Memory.readCString(args[2]));
//                 console.log(args[3], Memory.readCString(args[3]));
//                 console.log(args[4], Memory.readCString(args[4]));
//             },
//             onLeave: function (retval) {
//                 //retval函数返回值
//                 console.log('Leave');
//                 console.log(retval.toString());
//                 console.log(Memory.readCString(retval));
//                 console.log('======');
//                 // retval.replace(0)  
//             }
//         });
//     }
// })


console.log("脚本载入成功");
Java.perform(function () {
    var JavaString = Java.use("java.lang.String");
    var ByteString = Java.use("com.android.okhttp.okio.ByteString");
    var gzip = Java.use('com.max.xiaoheihe.utils.ca');
    gzip.a.overload("java.lang.String").implementation = function (p1) {
        console.log('gzip-in:', p1);
        var ps = this.a(p1);
        console.log('gzip-out:', ByteString.of(ps).hex());
        return ps;
    };
    var uw = Java.use('com.max.xiaoheihe.utils.W');
    uw.d.overload("int").implementation = function (p1) {
        console.log('genkey-in:', p1);
        if (p1 == 8) {
            var ps = "aaaaaaaa";
        } else {
            var ps = this.d(p1);
        }
        console.log('genkey-out:', ps);
        return (ps);
    }

    var encodeAddr = Module.findExportByName("libnative-lib.so", "getrsakey");
    console.log(encodeAddr);
    if (encodeAddr != null) {
        Interceptor.attach(encodeAddr, {
            onEnter: function (args) {
                //args参数数组
                console.log('Enter')
                console.log(args[0], Memory.readCString(args[0]));
                console.log(args[1], Memory.readCString(args[1]));
                console.log(args[2], Memory.readCString(args[2]));
                console.log(args[3], Memory.readCString(args[3]));
                console.log(args[4], Memory.readCString(args[4]));
            },
            onLeave: function (retval) {
                //retval函数返回值
                console.log('Leave');
                console.log(retval.toString());
                console.log(Memory.readUtf8(retval));
                console.log('======');
                // retval.replace(0)  
            }
        });
    }
});