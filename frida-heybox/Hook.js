console.log("脚本载入成功");
Interceptor.attach(Module.findExportByName("libnative-lib.so", "encode"), {
    onEnter: function (args) {
        send("encode(" + Memory.readCString(args[0]) + "," + args[1]+"," + args[2] + ")");
    },
    onLeave: function (retval) {

    }
});