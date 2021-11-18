

console.log("脚本载入成功");
Java.perform(function () {
    var u = Java.use('com.google.ctf.shallweplayagame.GameActivity');

    u.onCreate.implementation=function(p1){
        // console.log(this.o)
        this.o = 999999
        // console.log(this.o)
        console.log('enter')
        var r = this.onCreate(p1);
        console.log('end')
        return r;
    }

    u.n.implementation = function () {
        console.log('proxy_detect-in:');
        var ps = this.n();
        var ps = this.m();
        console.log('proxy_detect-out:');
        console.log(ps);
        return (ps);
    }

});