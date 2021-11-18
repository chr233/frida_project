/*
 * @Author       : Chr_
 * @Date         : 2020-09-14 19:03:03
 * @LastEditors  : Chr_
 * @LastEditTime : 2020-09-14 19:26:45
 * @Description  : com.example.ndktest2
 */

console.log("脚本载入成功");
Java.perform(function () {
    var strcat = Module.findExportByName("libc.so", "strcat");
    console.log(strcat);
    if (strcat != null) {
        Interceptor.attach(strcat, {
            onEnter: function (args) {
                var arg0 = args[0];
                var arg1 = args[1];
                console.log('strcpy - Enter');
                console.log(Memory.readCString(arg0));
                console.log(Memory.readCString(arg1));
            },
            onLeave: function (retval) {
                console.log('strcpy - Leave');
                console.log(retval);
                console.log('======');
            }
        });
    }
});
