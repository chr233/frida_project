/*
 * @Author       : Chr_
 * @Date         : 2020-09-12 19:35:23
 * @LastEditors  : Chr_
 * @LastEditTime : 2021-11-18 13:55:58
 * @Description  : 
 */

console.log("脚本载入成功");

Java.perform(function () {

    var Ghook = false;
    var Gurlpath = '';
    var Gtimestamp = '';
    var Gnonce = '';
    var Gresult = '';

    console.log(Script.runtime)

    var NDKTools = Java.use('com.max.xiaoheihe.utils.NDKTools');
    NDKTools.encode.overload('java.lang.Object', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (p1, p2, p3, p4) {

        if (Ghook) {
            Ghook = false
            p2 = Gurlpath;
            p3 = Gtimestamp;
            p4 = Gnonce;
            var ps = this.encode(p1, p2, p3, p4);
            Gresult = ps;
            return ps;
        }
        else {
            console.log('in:', p1, p2, p3, p4);
            var ps = this.encode(p1, p2, p3, p4);
            console.log('out:', ps);
            return (ps);
        }
    }

    function rpcPayload(urlpath, timestamp, nonce) {
        if (!urlpath.toString().endsWith('/')) {
            urlpath += '/';
        }

        Ghook = true;
        Gnonce = nonce;
        Gtimestamp = timestamp;
        Gurlpath = urlpath;
        
        Java.choose("com.max.xiaoheihe.utils.o1",{
            onMatch:function(instance){
                instance.y();
            },onComplete:function(){}
        })

        return Gresult;
    }

    console.log(rpcPayload( '/app/link/tree/', '1637135684', '00000000000000000000000000000000'));
    console.log(rpcPayload( '/app/link/tree', '1637135684', '00000000000000000000000000000000'));
    console.log(rpcPayload( '/mall/link/related/sku/', '1637135684', '00000000000000000000000000000000'));
    console.log(rpcPayload( '/account/data_report/', '1637135684', '00000000000000000000000000000000'));
    console.log(rpcPayload( '/bbs/app/api/follow/alert/', '1637135681', '00000000000000000000000000000000'));

});