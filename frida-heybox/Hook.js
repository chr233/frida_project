/*
 * @Author       : Chr_
 * @Date         : 2020-02-16 18:42:39
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-07-15 22:16:17
 * @Description  : 
 */
console.log("脚本载入成功");
// Interceptor.attach(Module.findExportByName("libnative-lib.so", "MD5Final"), {
//     onEnter: function(args) {
//         //send("encode(", Memory.readByteArray(args[1], 256));
//         console.log(Memory.readByteArray(args[0], 256))
//         console.log(Memory.readByteArray(args[1], 256))
//     },
//     onLeave: function(retval) {

//     }
// });

// Resources 类hook
Java.perform(function() {
    var MyClass = Java.use('com.max.xiaoheihe.network.l');

    MyClass.$init.overload().implementation = function() {
        //调用原来构造
        this.$init();
        send("hook 无参构造 ");
    }
});